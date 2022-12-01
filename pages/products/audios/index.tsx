import Audios from "@components/products/audios/Audios";
import { NextPage } from "next";
import Head from "next/head";
const AudiosPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Audios />
    </div>
  );
};
export default AudiosPage;
