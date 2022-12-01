import Videos from "@components/products/videos/Videos";
import { NextPage } from "next";
import Head from "next/head";
const VideosPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>     
      <Videos/>
    </div>
  );
};
export default VideosPage;