import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import Home from "@components/Home";
const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Fragment>
  );
};
export default HomePage;
