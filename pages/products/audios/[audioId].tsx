import Audio from "@components/products/audios/Audio";
import { NextPage } from "next";
import Head from "next/head";
import config from "../../../next.config";
import { parseCookies } from "../../../helper/parseCookie";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";
interface AudioPageProps {
  audio?: {
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
    ligthImage: string;
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
const AudioPage: NextPage = (props: AudioPageProps) => {
  const { audio, comments } = props;

  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Audio audio={audio ?? null} comments={comments ?? null} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.audioId;
  let apiAudioRes;
  let apiCommentsRes;
  let AudioPageProps;
  try {
    apiAudioRes = await axios(`${config.server}/api/products/audios/${id}`);
    if (apiAudioRes.data.audio.isSpecial === true) {
      const cookies = parseCookies(context.req);
      if (Object.keys(cookies).length > 0 && cookies.sub) {
        AudioPageProps = {
          audio:
            apiAudioRes.data.audio.length !== 0 ? apiAudioRes.data.audio : null,
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
      AudioPageProps = {
        audio:
          apiAudioRes.data.audio.length !== 0 ? apiAudioRes.data.audio : null,
      };
    }
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    AudioPageProps = { audio: null };
  }
  try {
    apiCommentsRes = await axios(`${config.server}/api/comments`);
    AudioPageProps = {
      ...AudioPageProps,
      comments:
        apiCommentsRes.data.comments.length !== 0
          ? apiCommentsRes.data.comments
          : null,
    };
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    AudioPageProps = { ...AudioPageProps, comments: null };
  }
  return {
    props: {
      ...AudioPageProps,
    },
  };
};
export default AudioPage;
