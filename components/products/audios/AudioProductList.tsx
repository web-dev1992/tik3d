import AudioItem from "@components/products/audios/AudioItem";
import { ObjectId } from "mongodb";
interface audio {
  _id: ObjectId;
  name: string;
  address: string;
  link: string;
  isSpecial: boolean;
  ligthImage: string;
}

const AudioProductList:React.FC<{audios:audio[]}> = ({audios}) => {
  return (
    <div className="w-full lg:w-6/10 bg-[#F6F8FB]  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-between items-center  m-auto place-content-between place-items-center gap-2 lg:gap-4 xl:gap-6 ">
      {audios.map((audio) => (
        <AudioItem key={audio._id.toString()} audio={audio} />
      ))}
    </div>
  );
};

export default AudioProductList;