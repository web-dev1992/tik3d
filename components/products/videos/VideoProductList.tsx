import VideoItem from "@components/products/videos/VideoItem";
import { ObjectId } from "mongodb";

interface video {
  _id: ObjectId;
  name: string;
  ligthImage: string;
  address: string;
  link: string;
  isSpecial: boolean;
}
const VideoProductList: React.FC<{ videos: video[] }> = ({ videos }) => {
  return (
    <div className="w-full  bg-[#F6F8FB]  grid grid-cols-2  sm:grid-cols-3 justify-between items-center  m-auto place-content-between place-items-start gap-2 lg:gap-4 xl:gap-6">
      {videos !== null ? (
        videos.map((video) => (
          <VideoItem key={video._id.toString()} video={video} />
        ))
      ) : (
        <span>ویدیویی یافت نشد!</span>
      )}
    </div>
  );
};

export default VideoProductList;
