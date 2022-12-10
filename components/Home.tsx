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
const HomeContent = () => {
  return (
    <MainLayout>
      <HomeItro />
      <Services />
      <Carousel />
      <Ad />
      <Tik3dDesignApp />
      <Tik3dBanner />
      <CommentList />
      <Clients />
      <MainFooter />
    </MainLayout>
  );
};

export default HomeContent;
