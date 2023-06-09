import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Content } from "@/styles/global";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Navbar />
        <Content>
          <Main />
          <NextScript />
        </Content>
        <Footer />
      </body>
    </Html>
  );
}
