import Images from "@components/products/images/Images";
import { NextPage } from "next";
import Head from "next/head";
const ImagesPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Images />
    </div>
  );
};
export default ImagesPage;
