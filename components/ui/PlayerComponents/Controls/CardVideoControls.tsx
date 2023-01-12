/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CardVideoPauseButton from "@components/ui/PlayerComponents/Controls/CardVideoPauseButton";
import CardVideoPlayButton from "@components/ui/PlayerComponents/Controls/CardVideoPlayButton";

interface videoControlProps {
  onPlayPause: () => void;
  playing: boolean;
  played: number;

  volume: number;
}
const VideoControls: React.FC<{
  videoProps: videoControlProps;
  ref: React.Ref<HTMLDivElement>;
}> = forwardRef(({ videoProps }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex  justify-center items-center "
      style={{ direction: "ltr" }}
    >
      <button className="h-max rounded-full " onClick={videoProps.onPlayPause}>
        {videoProps.playing ? (
          <CardVideoPauseButton className="h-9 w-9 lg:h-10 lg:w-10 xl:w-16 xl:h-16 transform scale-90 hover:scale-100 " />
        ) : (
          <CardVideoPlayButton className="h-9 w-9 lg:h-10 lg:w-10 xl:w-16 xl:h-16 transform scale-90 hover:scale-100 " />
        )}
      </button>
    </div>
  );
});
export default VideoControls;
