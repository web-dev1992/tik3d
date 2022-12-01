import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import AudioPlayer from "@components/ui/PlayerComponents/AudioPlayer";
const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AudioPlayer />
    </Fragment>
  );
};
export default HomePage;
