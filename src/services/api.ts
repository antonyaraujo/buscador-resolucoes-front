import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";

function setUpAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx); // get all cookies

  const authApi = axios.create({
    baseURL: "https://api-url", //FIXME: api url
    headers: {
      Authorization: `Bearer ${cookies["resolution.uefs.token"]}`, // Set the auth token to make the requests
    },
  });

  type AxiosErrorResponse = {
    code?: string;
  };

  type AuthRequest = {
    onSuccess: (token: string) => void;
    onFailure: (err: AxiosError) => void;
  };

  let tokenIsRefreshing = false;
  let failedRequestQueue: AuthRequest[] = []; // failed requests cause of token expiration

  authApi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<AxiosErrorResponse>) => {
      if (error.response?.status === 401) {
        if (error.response.data?.code === "token.expired") {
          cookies = parseCookies(ctx);

          const { "resolution.uefs.refreshToken": refreshToken } = cookies;
          const originalConfig = error.config;

          if (!tokenIsRefreshing) {
            tokenIsRefreshing = true;
            authApi
              .post("/refresh-token", {
                refreshToken,
              })
              .then((response) => {
                const { token } = response.data;
                const newRefreshToken = response.data.refreshToken;

                setCookie(ctx, "resolution.uefs.token", token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days. The expiration time is back-end's role.
                  path: "/",
                }); // undefined because it's browser s render.

                setCookie(
                  ctx,
                  "resolution.uefs.refreshToken",
                  newRefreshToken,
                  {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: "/",
                  }
                );

                // update the header's token.
                authApi.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${token}`;
                failedRequestQueue.forEach((request) =>
                  request.onSuccess(token)
                );
                failedRequestQueue = [];
              })
              .catch((err) => {
                failedRequestQueue.forEach((request) => request.onFailure(err));
                failedRequestQueue = [];

                if (typeof window !== "undefined") {
                  // Browser side render
                  signOut();
                }
              })
              .finally(() => {
                tokenIsRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              onSuccess: (token: string) => {
                // If token OK, make the request again
                originalConfig.headers!.Authorization = `Bearer ${token}`;
                resolve(authApi(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        }
        if (typeof window !== "undefined") {
          // logout the user.
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
      return Promise.reject(error);
    }
  );
  return authApi;
}

export default setUpAPIClient;
