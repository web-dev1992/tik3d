import Videos from "@components/products/videos/Videos";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import config from "../../../next.config";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";

interface VideoPageProps {
  videos?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    ligthImage: string;
    isSpecial: boolean;
  }[];
}
const VideosPage: NextPage = (props: VideoPageProps) => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Videos videos={props.videos ?? null} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  let apiVideosRes;
  let VideoPageProps;
  try {
    apiVideosRes = await axios(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/products/videos`
    );
    VideoPageProps = {
      videos:
        apiVideosRes.data.videos.length !== 0 ? apiVideosRes.data.videos : null,
    };
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    VideoPageProps = { videos: null };
  }

  return {
    props: {
      ...VideoPageProps,
    },
  };
};
export default VideosPage;
