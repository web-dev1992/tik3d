import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import ImageGallery from "@components/ui/ImageGallery/ImageGallery";
const Images= [
    {
      id: "i1",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i2",
      address: "/images/Cover.png",
      link: "#",
    },
    {
      id: "i3",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i4",
      address: "/images/Cover.png",
      link: "#",
    },
    {
      id: "i5",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i6",
      address: "/images/Cover.png",
      link: "#",
    },
    {
      id: "i7",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i8",
      address: "/images/Cover.png",
      link: "#",
    },
  ];
const GalleryPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageGallery images={Images}/>
    </Fragment>
  );
};
export default GalleryPage;