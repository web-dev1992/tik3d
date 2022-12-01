import { useState, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
interface audio {
  id: string;
  name: string;
  ligthImage: string;
  address: string;
  isSpecial: boolean;
}
const AudioItem: React.FC<{ audio: audio }> = ({ audio }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="bg-white font-IRANSans rounded-md shadow-[0_4px_7px_rgba(0,0,0,0.1)]  p-2 w-[100px] lg:w-[100px] xl:w-40 h-36  xl:h-56 flex flex-col flex-nowrap justify-center items-center gap-2 relative">
      {audio.isSpecial && (
        <>
          <div className="absolute top-1 left-4 z-10 xl:hidden ">
            <Image
              src="/images/special.png"
              alt="special"
              width={18}
              height={10}
            />
          </div>
          <div className="hidden xl:inline-block absolute top-[18px] left-6 z-10  ">
            <Image
              src="/images/special.png"
              alt="special"
              width={33}
              height={18}
            />
          </div>
        </>
      )}
      <div className="rounded overflow-hidden xl:hidden ">
        {hasWindow && (
          <ReactPlayer
            url={audio.address}
            controls={false}
            light={audio.ligthImage}
            playing
            playIcon={
              <button>
                <Image
                  alt="playButton"
                  src="/images/music-play-button.png"
                  width={25}
                  height={25}
                />
              </button>
            }
            volume={0.5}
            width={82}
            height={82}
          />
        )}
      </div>      
      <div className="hidden rounded overflow-hidden xl:flex">
        {hasWindow && (
          <ReactPlayer
            url={audio.address}
            controls={false}
            light={audio.ligthImage}
            playing
            playIcon={
              <button>
                <Image
                  alt="playButton"
                  className="rounded"
                  src="/images/music-play-button.png"
                  width={29}
                  height={29}
                />
              </button>
            }
            volume={0.5}
            width={128}
            height={128}
          />
        )}
      </div>
      <p className=" pr-1 xl:pr-2 w-full flex flex-row justify-start text-right text-[7px] font-medium text-[#1B1A21] leading-[11px] xl:text-xs">
        {audio.name}
      </p>
      <div className="w-full flex flex-row justify-center items-center">
        <button
          className="w-12 h-3.5  rounded flex flex-row justify-center items-center text-white font-normal text-[6px] leading-[10px]  xl:text-[10px] xl:leading-[15px] xl:w-[87px] xl:h-[22px] bg-abi"
          type="button"
        >
          مشاهده و دانلود
        </button>
      </div>
    </div>
  );
};

export default AudioItem;
