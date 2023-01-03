import { SessionProvider } from "next-auth/react";
import { CookiesProvider } from "react-cookie";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import SubProvider from "store/subContext";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <CookiesProvider>
      <SessionProvider session={pageProps.session}>
        <SubProvider>
          <Component {...pageProps} />
        </SubProvider>
      </SessionProvider>
    </CookiesProvider>
  );
}
