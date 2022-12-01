import Audio from "@components/products/audios/Audio";
import { NextPage } from "next";
import Head from "next/head";
const AudioPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Audio />
    </div>
  );
};
export default AudioPage;
