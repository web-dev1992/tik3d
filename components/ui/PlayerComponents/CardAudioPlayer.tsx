import React, { useState, useRef, useEffect, Fragment } from "react";
import ReactPlayer from "react-player";
import CardAudioControls from "./Controls/CardAudioControls";

const CardAudioPlayer: React.FC<{ fileAddress: string }> = ({
  fileAddress,
}) => {
  const playerRef = useRef(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const [state, setState] = useState<{
    pip: boolean; //for enable or disable picture in picture mode
    playing: boolean;
    controls: boolean;
    light: boolean | string; //Set to true to show just the video thumbnail, which loads the full player on click
    //◦  Pass in an image URL to override the preview image
    muted: boolean;
    played: number;
    duration: number; //total duration of video
    volume: number;
    loop: boolean; //Set to true or false to loop the media
    seeking: boolean;
    currentSeek: number;
  }>({
    pip: false,
    playing: false,
    controls: false,
    light: false,
    muted: false,
    played: 0,
    duration: 0,
    volume: 0.5,
    loop: false,
    seeking: false,
    currentSeek: 0,
  });

  const {
    pip,
    playing,
    controls,
    light,
    muted,
    played,
    volume,
    loop,
    seeking,
    currentSeek,
  } = state;
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  return (
    <div
      ref={playerContainerRef}
      className=" w-[80px] h-[80px]  xl:w-[128px] xl:h-[128px] bg-[url('/images/Cover.png')] bg-cover  relative  rounded xl:rounded-lg "
    >
      {hasWindow && (
        <Fragment>
          <ReactPlayer
            ref={playerRef}
            url={fileAddress}
            width="100%"
            height="100%"
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            volume={volume}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous",
                },
              },
            }}
          />

          <CardAudioControls
            audioProps={{
              onPlayPause: handlePlayPause,
              playing: playing,
              muted: muted,
            }}
            
          />
        </Fragment>
      )}
    </div>
  );
};

export default CardAudioPlayer;
