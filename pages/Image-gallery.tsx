import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import ImageGallery from "@components/ui/ImageGallery/ImageGallery";
const GalleryPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageGallery />
    </Fragment>
  );
};
export default GalleryPage;
