import React from "react";
import { useRouter } from "next/router";
import ProductLayout from "@components/layout/ProductLayout";
import VideoPlayer from "@components/ui/PlayerComponents/VideoPlayer";
import Downloads from "../Downloads";
import Description from "../Description";
import InsertComment from "../InsertComment";
import CommentsList from "@components/products/Comment";
import Introduction from "../Introduction";
import { ObjectId } from "mongodb";

interface videoProps {
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
}
interface CommentsProps {
  _id: ObjectId;
  productId: ObjectId;
  name: string;
  email: string;
  star: number;
  image?: string;
  comment: string;
}

const Video: React.FC<{
  video: videoProps;
  comments: CommentsProps[];
}> = (props) => {
  const router = useRouter();
  const productId = router.query.videoId;

  return (
    <ProductLayout>
      <div className="bg-white w-full m-auto flex flex-col flex-nowrap  pb-14 ">
        {/* <SiteMap/> */}
        <p className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  text-right font-IRANSans text-[#0F2137] text-[8px] xl:text-xs font-light opacity-60 leading-3 mt-4 lg:mt-[42px] xl:mt-16 px-2 lg:px-4 xl:px-10">
          خانه / متریال / آشپرخانه
        </p>
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  flex flex-col flex-nowrap lg:flex-row justify-center items-center lg:items-start gap-4 lg:gap-2 mt-4">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* video player component */}
            <VideoPlayer fileAddress={props.video.address} />
          </div>
          {/* introduction */}
          <Introduction introProps={props.video} />
        </div>
      </div>
      <div className="bg-[#F6F8FB] w-full m-auto flex flex-col flex-nowrap pt-8">
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  flex flex-col flex-nowrap lg:flex-row justify-center items-center lg:items-start xl:gap-4 lg:gap-1  mt-4">
          {/* description */}
          <Description text={props.video.description} />
          {/* downloads */}
          <Downloads downloads={props.video.downloads} />
        </div>
      </div>
      <div className="bg-[#F6F8FB] w-full m-auto pt-8">
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto flex flex-col flex-nowrap  justify-center items-start  lg:gap-2 mt-4">
          <h2 className="font-bold px-3 text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal ">
            نظرات
          </h2>
          <div className="w-full  flex flex-col flex-nowrap justify-center items-start lg:flex-row lg:justify-start font-IRANSans xl:gap-4 lg:gap-1  ">
            {/* comments */}
            <CommentsList commentsList={props.comments.slice(0, 3)} />
            {/* insert comment */}
            <InsertComment productId={productId} />
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Video;
