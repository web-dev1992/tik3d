import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
interface Video {
  id: string;
  name: string;
  ligthImage: string;
  address: string;
  isSpecial: boolean;
}
const VideoItem: React.FC<{ video: Video }> = ({ video }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="bg-white font-IRANSans rounded-lg shadow-[0_4px_7px_rgba(0,0,0,0.1)] p-2 w-40 md:w-44 xl:w-[270px] h-max md:h-[139px] xl:h-56 flex flex-col flex-nowrap justify-center items-start gap-2 relative ">
      {video.isSpecial && (
        <>
          <div className="absolute top-0 left-4 z-10 xl:hidden ">
            <Image
              src="/images/special.png"
              alt="special"
              width={18}
              height={10}
            />
          </div>
          <div className="hidden xl:inline-block absolute top-3 left-6 z-10  ">
            <Image
              src="/images/special.png"
              alt="special"
              width={33}
              height={18}
            />
          </div>
        </>
      )}
      <div className="rounded overflow-hidden md:hidden">
        {hasWindow && (
          <ReactPlayer
            url={video.address}
            controls={false}
            light={video.ligthImage}
            playing
            playIcon={
              <button>
                <Image
                  alt="playButton"
                  className="rounded"
                  src="/images/video-paly-button.png"
                  width={35}
                  height={35}
                />
              </button>
            }
            volume={0.5}
            width={141}
            height={74}
          />
        )}
      </div>
      <div className="hidden md:flex rounded overflow-hidden w-full xl:hidden">
        {hasWindow && (
          <ReactPlayer
            url={video.address}
            controls={false}
            light={video.ligthImage}
            playing
            playIcon={
              <button>
                <Image
                  alt="playButton"
                  className="rounded"
                  src="/images/video-paly-button.png"
                  width={40}
                  height={40}
                />
              </button>
            }
            volume={0.5}
            width={160}
            height={82}
          />
        )}
      </div>
      <div className="hidden rounded overflow-hidden w-full xl:flex">
        {hasWindow && (
          <ReactPlayer
            url={video.address}
            controls={false}
            light={video.ligthImage}
            playing
            playIcon={
              <button>
                <Image
                  alt="playButton"
                  className="rounded"
                  src="/images/video-paly-button.png"
                  width={64}
                  height={64}
                />
              </button>
            }
            volume={0.5}
            width={260}
            height={132}
          />
        )}
      </div>
      <p className="text-right text-[7px] font-medium text-[#1B1A21] leading-[10px] xl:text-xs">
        {video.name}
      </p>
      <div className="w-full">
        <button
          className="w-full rounded flex flex-row justify-center items-center text-white font-bold text-[7px] leading-[10px] width-full xl:text-xs h-4 xl:h-7 bg-abi"
          type="button"
        >
          مشاهده و دانلود
        </button>
      </div>
    </div>
  );
};

export default VideoItem;
