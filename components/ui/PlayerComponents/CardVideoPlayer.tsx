import React, { useState, useRef, Fragment, useEffect } from "react";
import ReactPlayer from "react-player";
import CardVideoControls from "./Controls/CardVideoControls";

let count = 0;
const CardVideoPlayer: React.FC<{ fileAddress: string }> = ({
  fileAddress,
}) => {
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
    light: boolean; //Set to true to show just the video thumbnail, which loads the full player on click
    //◦  Pass in an image URL to override the preview image
    muted: boolean;
    played: number;
    duration: number; //total duration of video
    playbackRate: number;
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
    playbackRate: 1.0,
    volume: 0.5,
    loop: false,
    seeking: false,
    currentSeek: 0,
  });

  const playerRef = useRef(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const {
    pip,
    playing,
    controls,
    light,
    muted,
    played,
    playbackRate,
    volume,
    loop,
    seeking,
    currentSeek,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  return (
    <div className="overflow-hidden w-[138px] h-[70px] lg:w-[154px] lg:h-[77px] xl:w-[250px] xl:h-[180px] aspect-video xl:rounded-lg rounded">
      <div
        ref={playerContainerRef}
        className="bg-gray-900 overflow-hidden h-auto w-auto relative pt-[56.25%] "
        onMouseMove={handleMouseMove}
        onMouseLeave={hanldeMouseLeave}
      >
        {hasWindow && (
          <Fragment>
            <ReactPlayer
              className="absolute top-0 left-0"
              ref={playerRef}
              url={fileAddress}
              width="100%"
              height="100%"
              pip={pip}
              playing={playing}
              controls={false}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
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

            <CardVideoControls
              videoProps={{
                onPlayPause: handlePlayPause,
                playing: playing,
                played: played,
                volume: volume,
              }}
              ref={controlsRef}
            />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default CardVideoPlayer;
