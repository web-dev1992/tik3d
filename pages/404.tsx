import FourOhFour from "../components/404";
import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
const FourOhFourPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>404 Error</title>
        <meta
          name="description"
          content="Online Shop ;selling professional products of video, musics, photos for AD"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FourOhFour />
    </Fragment>
  );
};
export default FourOhFourPage;
