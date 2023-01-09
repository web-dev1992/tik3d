import Video from "@components/products/videos/Video";
import { getSession } from "next-auth/react";
import { NextPage } from "next";
import Head from "next/head";
import config from "../../../next.config";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { parseCookies } from "../../../helper/parseCookie";
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
  const session = await getSession({ req: context.req });

  let apiVideoRes;
  let apiCommentsRes;
  let VideoPageProps;
  try {
    apiVideoRes = await axios(`${process.env.NEXT_PUBLIC_DOMAIN}/api/products/videos/${id}`);
    if (apiVideoRes.data.video.isSpecial === true) {
      const cookies = parseCookies(context.req);
      if (Object.keys(cookies).length > 0 && cookies.sub && session) {
        VideoPageProps = {
          video:
            apiVideoRes.data.video.length !== 0 ? apiVideoRes.data.video : null,
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
      VideoPageProps = {
        video:
          apiVideoRes.data.video.length !== 0 ? apiVideoRes.data.video : null,
      };
    }
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    VideoPageProps = { video: null };
  }
  try {
    apiCommentsRes = await axios(`${process.env.NEXT_PUBLIC_DOMAIN}/api/comments`);
    VideoPageProps = {
      ...VideoPageProps,
      comments:
        apiCommentsRes.data.comments.length !== 0
          ? apiCommentsRes.data.comments
          : null,
    };
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    VideoPageProps = { ...VideoPageProps, comments: null };
  }
  return {
    props: {
      ...VideoPageProps,
    },
  };
};
export default VideoPage;
