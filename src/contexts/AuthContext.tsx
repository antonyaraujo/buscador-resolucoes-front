import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from "react";
import api from "../services/apiClient";
import { useRouter } from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import decode from "jwt-decode";

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  email: string;
  name: string;
};

type AuthContextData = {
  /**
   * Send the user's credentials to be authorized on back-end.
   * @param SignInCredentials - User's email and password.
   */
  signIn: (credentials: SignInCredentials) => Promise<number>;
  signOut: () => void;

  /**
   *control if the user is authenticated or not.
   */
  isAuthenticated: boolean;
  user: User;
};

interface AuthProviderProps {
  children: ReactNode;
}

export function signOut() {
  // The user ins't allowed anymore.
  destroyCookie(undefined, "resolution.uefs.token", {
    path: "/",
  });
  destroyCookie(undefined, "resolution.uefs.refreshToken", {
    path: "/",
  });
  window.location.href = "/login";
}

/**
 * Context that allows the rest of application verify and control the user's authenticate and authorization.
 */
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const route = useRouter();
  const [user, setUser] = useState<User>({ email: "", name: "" });
  const isAuthenticated = !!user; // User authenticated = true, User null = false.

  // On first page load or refresh, get the user's information again.
  // Alt: get user's data from the token.
  useEffect(() => {
    const { "resolution.uefs.refreshToken": refreshToken } = parseCookies(); // get auth token from all saved cookies.
    if (refreshToken) {
      const newUser = decode<{
        email: string;
        name: string;
      }>(refreshToken);
      setUser({
        email: newUser.email,
        name: newUser.name,
      });
    }
  }, []);

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      try {
        const response = await api.post("login", {
          email,
          password,
        });

        const { token } = response.data;
        const refreshToken = response.data.refresh_token;
        const { name } = response.data.user;

        // Save the token and the refresh token in the browser cookies.

        setCookie(undefined, "resolution.uefs.token", token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days. The expiration time is back-end's role.
          path: "/",
        }); // undefined because it's browser side render.

        setCookie(undefined, "resolution.uefs.refreshToken", refreshToken, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });

        setUser({
          email,
          name,
        });
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // FIXME: right route to push after login
        route.push("/upload");
      } catch (error) {
        return 400;
      }
      return 200;
    },
    [route]
  );

  const auth = useMemo(
    () => ({ signIn, signOut, isAuthenticated, user }),
    [isAuthenticated, signIn, user]
  );
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
