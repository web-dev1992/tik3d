import Video from "@components/products/videos/Video";
import { NextPage } from "next";
import Head from "next/head";
import config from "../../../next.config";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";
interface VideoPageProps {
  video?: {
    _id: ObjectId;
    name: string;
    ligthImage: string;
    link: string;
    address: string;
    isSpecial: boolean;
    renderMotor: string;
    version: string;
    style: string;
    owner: string;
    description: string;
    tags: string[];
    downloads: { name: string; address: string; size: string }[];
  };
  comments?: {
    _id: ObjectId;
    productId: ObjectId;
    name: string;
    email: string;
    star: number;
    image?: string;
    comment: string;
  }[];
}
const VideoPage: NextPage = (props: VideoPageProps) => {
  const { video, comments } = props;

  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Video video={video ?? null} comments={comments ?? null} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.videoId;
  let apiVideoRes;
  let apiCommentsRes;
  let homeProps;
  try {
    apiVideoRes = await axios(`${config.server}/api/products/videos/${id}`);
    homeProps = {
      video:
        apiVideoRes.data.video.length !== 0 ? apiVideoRes.data.video : null,
    };
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    homeProps = { video: null };
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
export default VideoPage;
