import React, { useState, useRef, useEffect, Fragment } from "react";
import ReactPlayer from "react-player";
import AudioControls from "./Controls/AudioControls";
const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;
type SourceProps = {
  address: string;
};
const AudioPlayer: React.FC<{ fileAddress: string }> = ({ fileAddress }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
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
    volume,
    loop,
    seeking,
    currentSeek,
  } = state;

  const handleOnProgress = (e) => {
    setState({
      ...state,
      currentSeek: e.playedSeconds,
    });
  };

  const handleSeekChange = (e) => {
    setState({
      ...state,
      currentSeek: e.target.value,
    });
    playerRef.current.seekTo(e.target.value);
  };
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleDuration = (duration: number) => {
    setState({ ...state, duration });
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal" ? "remaining" : "normal"
    );
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat === "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);

  return (
    <div
      ref={playerContainerRef}
      className="w-[327px] h-[327px] lg:w-[373px] lg:h-[373px] xl:w-[600px] xl:h-[600px] bg-[url('/images/Cover.png')] bg-cover overflow-hidden  relative  rounded-[10px] xl:rounded-2xl "
      onMouseMove={handleMouseMove}
      onMouseLeave={hanldeMouseLeave}
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
            onProgress={(e) => {
              handleOnProgress(e);
            }}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous",
                },
              },
            }}
          />

          <AudioControls
            videoProps={{
              currentSeek: currentSeek,
              onDuration: handleDuration,
              onPlayPause: handlePlayPause,
              handleSeekChange: handleSeekChange,
              playing: playing,
              played: played,
              elapsedTime: elapsedTime,
              totalDuration: totalDuration,
              duration: duration,
              muted: muted,
              onChangeDispayFormat: handleDisplayFormat,
              volume: volume,
            }}
            ref={controlsRef}
          />
        </Fragment>
      )}
    </div>
  );
};

export default AudioPlayer;
