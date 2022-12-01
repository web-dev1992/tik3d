import Video from "@components/products/videos/Video";
import { NextPage } from "next";
import Head from "next/head";
const VideoPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Video />
    </div>
  );
};
export default VideoPage;