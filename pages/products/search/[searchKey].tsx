import Search from "@components/products/search/Search";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { GetServerSideProps } from "next/types";
import { ObjectId } from "mongodb";
interface SearchPageProps {
  audios?: {
    _id: ObjectId;
    name: string;
    link: string;
    address: string;
    isSpecial: boolean;
    ligthImage: string;
  }[];
  videos?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    ligthImage: string;
    isSpecial: boolean;
  }[];
  images?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    isSpecial: boolean;
  }[];
}
const SearchPage: NextPage = (props: SearchPageProps) => {
  const { videos, images, audios } = props;

  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search
        videos={videos ?? null}
        images={images ?? null}
        audios={audios ?? null}
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchKey = context.query.searchKey;
  let apiSearchRes;

  let SearchPageProps;
  try {
    apiSearchRes = await axios(
      `${process.env.domain}/api/products/search/${searchKey}`
    );
    SearchPageProps = {
      videos:
        apiSearchRes.data.videos.length !== 0 ? apiSearchRes.data.videos : null,
      images:
        apiSearchRes.data.images.length !== 0 ? apiSearchRes.data.images : null,
      audios:
        apiSearchRes.data.audios.length !== 0 ? apiSearchRes.data.audios : null,
    };
  
  } catch (err) {
    console.error("err.response.data=======>", err.response.data);
    console.error("err.response.status=====>", err.response.status);
    SearchPageProps = { audios: null, videos: null, images: null };
  }

  return {
    props: {
      ...SearchPageProps,
    },
  };
};
export default SearchPage;
