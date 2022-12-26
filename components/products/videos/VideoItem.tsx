import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CardItemName from "@components/ui/CardItemName";
import CardVideoPlayer from "@components/ui/PlayerComponents/CardVideoPlayer";
import { ObjectId } from "mongodb";
interface Video {
  _id: ObjectId;
  name: string;
  ligthImage: string;
  address: string;
  isSpecial: boolean;
  link: string;
}
const VideoItem: React.FC<{ video: Video }> = ({ video }) => {
  const router = useRouter();

  return (
    <div className="bg-white font-IRANSans rounded-lg shadow-[0_4px_7px_rgba(0,0,0,0.1)] p-2 lg:pt-2.5 xl:p-3 xl:pt-4 w-[156px] lg:w-44  xl:w-[270px] h-max md:h-[139px] xl:h-56 flex flex-col flex-nowrap justify-center items-center gap-2 relative ">
      {video.isSpecial && (
        <>
          <div className="absolute top-1.5 md:top-3 lg:top-2.5 left-4 xl:top-3.5 xl:left-6 z-10 w-[18px] h-2.5  xl:w-[33px] xl:h-[18px]   ">
            <Image src="/images/special.png" alt="special" layout="fill" />
          </div>
        </>
      )}

      <CardVideoPlayer
        fileAddress={video.address}
        ligthImage={video.ligthImage}
      />
      <CardItemName itemName={video.name} />
      <div className="w-full flex flex-row justify-center items-center">
        <button
          className="w-full h-3.5 ] xl:h-7 bg-abi rounded flex flex-row justify-center items-center text-white font-normal text-[6px] leading-[10px]  xl:text-[10px] xl:leading-[15px] "
          type="button"
          onClick={() => {
            router.push(video.link);
          }}
        >
          مشاهده و دانلود
        </button>
      </div>
    </div>
  );
};

export default VideoItem;
