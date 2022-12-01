import ImageComponent from "@components/products/images/Image";
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
      <ImageComponent />
    </div>
  );
};
export default AudioPage;
