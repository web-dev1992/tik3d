import React, { forwardRef, FormEvent } from "react";
import PlayButtonIcon from "@components/ui/PlayerComponents/Controls/PlayButtonIcon";
import PauseButtonIcon from "@components/ui/PlayerComponents/Controls/PauseButtonIcon";

interface audioControlProps {
  onPlayPause: () => void;
  playing: boolean;
  muted: boolean;
}
const CardAudioControls: React.FC<{
  audioProps: audioControlProps;
  
}> = ({ audioProps }) => {
  return (
    <div
      className="absolute left-0 bottom-0 right-0 w-full h-full  bg-transparent flex flex-row  justify-start items-end "
      style={{ direction: "ltr" }}
    >
      {/* top controls */}
      <div className="z-20 w-full h-full flex flex-row  relative ">
        <button
          className="h-max rounded-full "
          onClick={audioProps.onPlayPause}
        >
          {audioProps.playing ? (
            <PauseButtonIcon className="absolute -bottom-3 left-16 xl:-bottom-4 xl:left-28 h-7 w-7 xl:w-9 xl:h-9 transform scale-90 hover:scale-100 " />
          ) : (
            <PlayButtonIcon className="absolute -bottom-3 left-16 xl:-bottom-4 xl:left-28 h-7 w-7 xl:w-9 xl:h-9 transform scale-90 hover:scale-100 " />
          )}
        </button>
      </div>
    </div>
  );
};
export default CardAudioControls;
