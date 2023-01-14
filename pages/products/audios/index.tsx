import Audios from "@components/products/audios/Audios";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";
interface AudioPageProps {
  audios?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    isSpecial: boolean;
    ligthImage: string;
  }[];
}
const AudiosPage: NextPage = (props: AudioPageProps) => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Audios audios={props.audios ?? null} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  let apiAudiosRes;
  let AudioPageProps;
  try {
    apiAudiosRes = await axios(`${process.env.domain}/api/products/audios`);
    AudioPageProps = {
      audios:
        apiAudiosRes.data.audios.length !== 0 ? apiAudiosRes.data.audios : null,
    };
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    AudioPageProps = { audios: null };
  }

  return {
    props: {
      ...AudioPageProps,
    },
  };
};
export default AudiosPage;
