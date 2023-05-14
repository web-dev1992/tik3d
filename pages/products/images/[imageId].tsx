import ImageComponent from "@components/products/images/Image";
import { getSession } from "next-auth/react";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { parseCookies } from "../../../helper/parseCookie";
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
  const session = await getSession({ req: context.req });
  const id = context.query.imageId;
  let apiImageRes;
  let apiCommentsRes;
  let ImagePageProps;
  try {
    apiImageRes = await axios(
      `${process.env.domain}/api/products/images/${id}`
    );
    if (apiImageRes.data.image.isSpecial === true) {
      const cookies = parseCookies(context.req);
      if (Object.keys(cookies).length > 0 && cookies.sub && session) {
        ImagePageProps = {
          image:
            apiImageRes.data.image.length !== 0 ? apiImageRes.data.image : null,
        };
      } else {
        return {
          redirect: {
            destination: "/user-account/login",
            permanent: false,
          },
        };
      }
    } else {
      ImagePageProps = {
        image:
          apiImageRes.data.image.length !== 0 ? apiImageRes.data.image : null,
      };
    }
  } catch (err) {
    //
    console.error("err.response.status=====>", err.response.status);
    ImagePageProps = { image: null };
  }
  try {
    apiCommentsRes = await axios(`${process.env.domain}/api/comments`);
    ImagePageProps = {
      ...ImagePageProps,
      comments:
        apiCommentsRes.data.comments.length !== 0
          ? apiCommentsRes.data.comments
          : null,
    };
  } catch (err) {
    //
    console.error("err.response.status=====>", err.response.status);
    ImagePageProps = { ...ImagePageProps, comments: null };
  }
  return {
    props: {
      ...ImagePageProps,
    },
  };
};
export default ImagePage;
