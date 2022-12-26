import ImageComponent from "@components/products/images/Image";
import { NextPage } from "next";
import Head from "next/head";
import config from "../../../next.config";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";
interface ImagePageProps {
  image: {
    _id: ObjectId;
    name: string;
    link: string;
    address: string;
    isSpecial: boolean;
    renderMotor: string;
    version: string;
    style: string;
    owner: string;
    description: string;
    images: string[];
    tags: string[];
    downloads: { name: string; address: string; size: string }[];
  };
  comments?: {
    _id: ObjectId;
    productId: ObjectId;
    name: string;
    email: string;
    star: number;
    image: string;
    comment: string;
  }[];
}
const ImagePage: NextPage = (props: ImagePageProps) => {
  const { image, comments } = props;
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageComponent image={image ?? null} comments={comments ?? null} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.imageId;
  let apiImageRes;
  let apiCommentsRes;
  let homeProps;
  try {
    apiImageRes = await axios(`${config.server}/api/products/images/${id}`);
    homeProps = {
      image:
        apiImageRes.data.image.length !== 0 ? apiImageRes.data.image : null,
    };
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    homeProps = { image: null };
  }
  try {
    apiCommentsRes = await axios(`${config.server}/api/comments`);
    homeProps = {
      ...homeProps,
      comments:
        apiCommentsRes.data.comments.length !== 0
          ? apiCommentsRes.data.comments
          : null,
    };
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    homeProps = { ...homeProps, comments: null };
  }
  return {
    props: {
      ...homeProps,
    },
  };
};
export default ImagePage;
