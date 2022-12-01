import { Fragment } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
// import { StyledEngineProvider } from "@mui/material";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {/* <StyledEngineProvider injectFirst> */}
        <Component {...pageProps} />
      {/* </StyledEngineProvider> */}
    </Fragment>
  );
}
