import VideoItem from "@components/products/videos/VideoItem";
interface video {
  id: string;
  name: string;
  address: string;
  ligthImage: string;
  isSpecial: boolean;
  link: string;
}

const VideoProductList: React.FC<{ videos: video[] }> = ({ videos }) => {
  return (
    <div className="w-full lg:w-6/10 bg-[#F6F8FB]  grid grid-cols-2  sm:grid-cols-3 justify-between items-center  m-auto place-content-between place-items-center gap-2 lg:gap-4 xl:gap-6 ">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoProductList;
