import Images from "@components/products/images/Images";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";

interface ImagePageProps {
  images?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    isSpecial: boolean;
  }[];
}
const ImagesPage: NextPage = (props: ImagePageProps) => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Images images={props.images ?? null} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let apiImagesRes;
  let ImagePageProps;
  try {
    apiImagesRes = await axios(`${process.env.domain}/api/products/images`);
    ImagePageProps = {
      images:
        apiImagesRes.data.images.length !== 0 ? apiImagesRes.data.images : null,
    };
  } catch (err) {
    //
    console.error("err.response.status=====>", err.response.status);
    ImagePageProps = { images: null };
  }

  return {
    props: {
      ...ImagePageProps,
    },
  };
};
export default ImagesPage;
