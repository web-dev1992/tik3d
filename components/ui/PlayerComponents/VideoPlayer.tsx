import React, { useState, useRef, Fragment, useEffect } from "react";
import ReactPlayer from "react-player";
import screenful from "screenfull";
import VideoControls from "./Controls/VideoControls";

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

const VideoPlayer: React.FC<{ fileAddress: string }> = ({ fileAddress }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
  const [fullScreen, setFullScreen] = useState<boolean>(false);
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
  const handleVolumeChange = (e) => {
    setState({
      ...state,
      muted: e.target.value === 0 ? true : false,
      volume: e.target.value / 100,
    });
  };
  const handleOnProgress = (e) => {
    setState({
      ...state,
      currentSeek: e.playedSeconds,
    });
  };
  const handlePictureinPicture = () => {
    setState({ ...state, pip: !state.pip });
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

  const toggleFullScreen = () => {
    screenful.toggle(playerContainerRef.current);
    setFullScreen(!fullScreen);
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

  const handlePlaybackRate = (rate: number) => {
    setState({ ...state, playbackRate: rate });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
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
    <div className="w-[327px] h-48 lg:w-[373px] lg:h-[218px] xl:w-[600px] xl:h-[351px]">
      <div
        ref={playerContainerRef}
        className="bg-gray-900 overflow-hidden h-auto w-auto relative pt-[56.25%] rounded-lg xl:rounded-2xl "
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

            <VideoControls
              videoProps={{
                currentSeek: currentSeek,
                handlePictureInPicture: handlePictureinPicture,
                onDuration: handleDuration,
                onPlayPause: handlePlayPause,
                handleSeekChange: handleSeekChange,
                handleVolumeChange: handleVolumeChange,
                playing: playing,
                played: played,
                elapsedTime: elapsedTime,
                totalDuration: totalDuration,
                duration: duration,
                onMute: hanldeMute,
                muted: muted,
                onChangeDispayFormat: handleDisplayFormat,
                playbackRate: playbackRate,
                onPlaybackRateChange: handlePlaybackRate,
                onToggleFullScreen: toggleFullScreen,
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

export default VideoPlayer;
