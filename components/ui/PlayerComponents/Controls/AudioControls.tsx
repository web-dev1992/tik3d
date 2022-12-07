import React, { forwardRef, FormEvent } from "react";
import PlayButtonIcon from "@components/ui/PlayerComponents/Controls/PlayButtonIcon";
import PauseButtonIcon from "@components/ui/PlayerComponents/Controls/PauseButtonIcon";
import ProgressBar from "./ProgressBar";

interface audioControlProps {
  currentSeek: number;
  onDuration: (duration: number) => void;
  duration: number;
  handleSeekChange: (e: FormEvent) => void;
  onPlayPause: () => void;
  playing: boolean;
  played: number;
  elapsedTime: string;
  totalDuration: string;
  muted: boolean;
  onChangeDispayFormat: () => void;
  volume: number;
}
const AudioControls: React.FC<{
  audioProps: audioControlProps;
  ref: React.Ref<HTMLDivElement>;
}> = forwardRef(({ audioProps }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute left-0 bottom-0 right-0 w-full h-full p-4 pt-56  lg:pt-64 lg:px-[18px] xl:p-[30px] xl:pt-[412px] bg-transparent flex flex-col flex-nowrap justify-end items-center "
      style={{ direction: "ltr" }}
    >
      {/* top controls */}
      <div className="z-20 w-full flex flex-row justify-center items-center relative ">
        <button
          className="h-max rounded-full "
          onClick={audioProps.onPlayPause}
        >
          {audioProps.playing ? (
            <PauseButtonIcon className="absolute -bottom-7 left-[120px] lg:-bottom-8 lg:left-[135px] xl:-bottom-14 xl:left-56  h-14 w-14 lg:h-16 lg:w-16 xl:w-28 xl:h-28 transform scale-90 hover:scale-100 " />
          ) : (
            <PlayButtonIcon className="absolute -bottom-8 left-[120px] lg:-bottom-[38px] lg:left-[135px] xl:-bottom-16 xl:left-56 h-[60px] w-[60px] lg:h-[70px] lg:w-[70px] xl:w-[120px] xl:h-[120px] transform scale-90 hover:scale-100 " />
          )}
        </button>
      </div>
      {/* bottom controls */}
      <div className="z-10 w-full h-[60px] lg:h-[70px] xl:h-28 flex flex-col justify-end items-center gap-0 px-5 pb-1  xl:px-8  xl:pb-2  bg-white backdrop-blur-md rounded-[10px] lg:rounded-xl xl:rounded-[18px] ">
        <div className="w-full h-max ">
          <ProgressBar
            max={audioProps.duration}
            handleSeekChange={audioProps.handleSeekChange}
            currentSeek={audioProps.currentSeek}
          />
        </div>

        <div className="w-full h-max flex flex-row justify-between items-center text-black text-[9px] leading-3 lg:text-xxs lg:leading-4 xl:text-base xl:leading-6 font-medium font-Hekayat">
          <span className="" onClick={audioProps.onChangeDispayFormat}>
            {audioProps.elapsedTime}
          </span>
          <span>{audioProps.totalDuration}</span>
        </div>
      </div>
    </div>
  );
});
AudioControls.displayName = "AudioControls";
export default AudioControls;
