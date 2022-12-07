import React, { forwardRef, useState, FormEvent } from "react";
import PlayArrowIcon from "@components/ui/PlayerComponents/Controls/PlayArrowIcon";
import PlayButtonIcon from "@components/ui/PlayerComponents/Controls/PlayButtonIcon";
import PauseButtonIcon from "@components/ui/PlayerComponents/Controls/PauseButtonIcon";
import PauseIcon from "@components/ui/PlayerComponents/Controls/PauseIcon";
import VolumeMuteIcon from "@components/ui/PlayerComponents/Controls/VolumeMuteIcon";
import TheaterModeIcon from "./TheaterModeIcon";
import FullScreenIcon from "./FullScreenIcon";
import VolumeIcon from "@components/ui/PlayerComponents/Controls/VolumeIcon";
import NextIcon from "@components/ui/PlayerComponents/Controls/NextIcon";
import SettingsMenu from "./SettingsMenu";
import ProgressBar from "./ProgressBar";

interface videoControlProps {
  currentSeek: number;
  handlePictureInPicture: () => void;
  onDuration: (duration: number) => void;
  duration: number;
  handleSeekChange: (e: FormEvent) => void;
  handleVolumeChange: (e: FormEvent) => void;
  onPlayPause: () => void;
  playing: boolean;
  played: number;
  elapsedTime: string;
  totalDuration: string;
  onMute: () => void;
  muted: boolean;
  onChangeDispayFormat: () => void;
  playbackRate: number;
  onPlaybackRateChange: (rate: number) => void;
  onToggleFullScreen: () => void;
  volume: number;
}
const VideoControls: React.FC<{
  videoProps: videoControlProps;
  ref: React.Ref<HTMLDivElement>;
}> = forwardRef(({ videoProps }, ref) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);

  const handleVolumeSlider = () => {
    setShowVolumeSlider((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 bottom-0 right-0 w-full h-full p-4 pt-8 lg:p-5 lg:pt-[38px] xl:p-8 xl:pt-[59px] bg-[rgba(0,0,0,0.6)] flex flex-col flex-nowrap justify-end items-center gap-6 lg:gap-7 xl:gap-11"
      style={{ direction: "ltr" }}
    >
      {/* top controls */}
      <div className="w-full flex flex-col justify-center items-center flex-grow-1 ">
        <button
          className="h-max rounded-full "
          onClick={videoProps.onPlayPause}
        >
          {videoProps.playing ? (
            <PauseButtonIcon className="h-14 w-14 lg:h-16 lg:w-16 xl:w-28 xl:h-28 transform scale-90 hover:scale-100 " />
          ) : (
            <PlayButtonIcon className="h-14 w-14 lg:h-16 lg:w-16 xl:w-28 xl:h-28 transform scale-90 hover:scale-100 " />
          )}
        </button>
      </div>
      {/* bottom controls */}
      <div className="w-full h-[70px] lg:h-[69px] xl:h-28 flex flex-col justify-center items-center gap-3 p-[18px] lg:px-5 lg:pt-[18px] lg:pb-6 xl:px-8 xl:pt-[30px] xl:pb-10  bg-white backdrop-blur-md rounded-[10px] lg:rounded-xl xl:rounded-[18px] ">
        <div className="w-full h-1/2 ">
          <ProgressBar
            max={videoProps.duration}
            handleSeekChange={videoProps.handleSeekChange}
            currentSeek={videoProps.currentSeek}
          />
        </div>

        <div className="w-full h-1/2 flex flex-row justify-between items-center px-2 xl:px-4 ">
          <div className="h-max w-8/12 flex flex-row justify-start items-center gap-3 xl:gap-5">
            <button onClick={videoProps.onPlayPause}>
              {videoProps.playing ? (
                <PauseIcon className="w-[9px] h-[9px] lg:h-2.5 lg:w-2.5  xl:h-4 xl:w-4  text-[#E6E6E6] " />
              ) : (
                <PlayArrowIcon className="w-[9px] h-[9px] lg:h-2.5 lg:w-2.5 xl:h-4 xl:w-4 text-abi" />
              )}
            </button>
            <button>
              <NextIcon className="w-[9px] h-[9px] lg:h-[7px] lg:w-3 xl:h-3 xl:w-[18px] text-abi #E6E6E6 " />
            </button>
            <button
              className="h-[9px] lg:h-2.5 xl:h-4"
              // onClick={videoProps.onMute}
              onClick={handleVolumeSlider}
            >
              {videoProps.volume === 0 ? (
                <VolumeMuteIcon className="w-[9px] h-[9px] lg:h-2.5 lg:w-2.5 xl:h-4 xl:w-4 text-abi " />
              ) : (
                <VolumeIcon className="w-[9px] h-[9px] lg:h-2.5 lg:w-2.5 xl:h-4 xl:w-4 text-abi " />
              )}
            </button>
            {showVolumeSlider && (
              <ProgressBar
                min={0}
                max={100}
                handleSeekChange={videoProps.handleVolumeChange}
                currentSeek={videoProps.volume * 100}
              />
            )}
            <span
              className="text-black  leading-3 text-xxs lg:leading-4 xl:text-base xl:leading-6 font-medium h-full flex flex-row justify-center items-center  font-Hekayat"
              onClick={videoProps.onChangeDispayFormat}
            >
              {videoProps.elapsedTime}/{videoProps.totalDuration}
            </span>
          </div>
          <div className="h-max w-3/12 flex flex-row justify-between items-center gap-2 xl:gap-4 relative ">
            <SettingsMenu changeRate={videoProps.onPlaybackRateChange} />

            <button onClick={videoProps.handlePictureInPicture}>
              <TheaterModeIcon className=" h-2 w-3 lg:h-2.5 lg:w-3 xl:h-3.5 xl:w-5" />
            </button>
            <button onClick={videoProps.onToggleFullScreen}>
              <FullScreenIcon className=" h-2 w-3 lg:h-2.5 lg:w-3.5 xl:h-4 xl:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
VideoControls.displayName = "VideoControls";
export default VideoControls;
