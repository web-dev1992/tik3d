import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import VideoPlayer from "@components/ui/PlayerComponents/VideoPlayer";
const VideoPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoPlayer />
    </Fragment>
  );
};
export default VideoPage;
