import MainLayout from "./layout/MainLayout";
import Carousel from "@components/ui/Carousel";
import Services from "@components/mainPage/Services";
import Ad from "@components/mainPage/Ad";
import Tik3dDesignApp from "@components/mainPage/Tik3dDesignApp";
import CommentList from "./ui/CommentLsit";
import Clients from "./ui/Clients";
import MainFooter from "./layout/MainFooter";
import Tik3dBanner from "./mainPage/Tik3dBanner";
import HomeItro from "./mainPage/HomeIntro";
import { ObjectId } from "mongodb";
import type { Session } from "next-auth";

interface HomeProps {
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
const HomeContent = (props: HomeProps) => {
  const { images, comments } = props;

  return (
    <MainLayout>
      <HomeItro />
      <Services />
      <Carousel images={images} />
      <Ad />
      <Tik3dDesignApp />
      <Tik3dBanner />
      <CommentList
        comments={
          comments !== null && comments.length > 0 ? comments.slice(0, 8) : null
        }
      />
      <Clients />
      <MainFooter />
    </MainLayout>
  );
};

export default HomeContent;
