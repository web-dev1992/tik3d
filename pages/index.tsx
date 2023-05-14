import { NextPage } from "next";
import { Fragment } from "react";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";
import Head from "next/head";
import Home from "@components/Home";

interface HomePageProps {
  images:
    | {
        _id: ObjectId;
        link: string;
        address: string;
        name: string;
        isSpecial: boolean;
      }[]
    | null;
  comments:
    | {
        _id: ObjectId;
        productId: ObjectId;
        name: string;
        email: string;
        star: number;
        image: string;
        comment: string;
      }[]
    | null;
  session?: Session;
}
const HomePage: NextPage = (props: HomePageProps) => {
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home
        images={props.images ? props.images : null}
        comments={props.comments ? props.comments : null}
      />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  let apiImagesRes;
  let apiCommentsRes;
  let homeProps;
  try {
    apiImagesRes = await axios(`${process.env.domain}/api/products/images`);
    homeProps = { images: apiImagesRes.data.images };
  } catch (err) {
    console.error("err.response.status=====>", err.response.status);
    homeProps = { images: null };
  }
  try {
    apiCommentsRes = await axios(`${process.env.domain}/api/comments`);
    homeProps = { ...homeProps, comments: apiCommentsRes.data.comments };
  } catch (err) {
    console.error("err.response.status=====>", err.response.status);
    homeProps = { ...homeProps, comments: null };
  }
  return {
    props: {
      session: session ? session : null,
      ...homeProps,
    },
  };
};
export default HomePage;
