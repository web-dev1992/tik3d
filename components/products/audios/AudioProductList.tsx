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

const AudioProductList: React.FC<{ audios: audio[] }> = ({ audios }) => {
  return (
    <div className="w-full bg-[#F6F8FB]  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-between items-center  m-auto place-content-between place-items-center gap-2 lg:gap-4 xl:gap-6 ">
      {audios !== null ? (
        audios.map((audio) => (
          <AudioItem key={audio._id.toString()} audio={audio} />
        ))
      ) : (
        <span>فایل صوتی پیدا نشد!</span>
      )}
    </div>
  );
};

export default AudioProductList;
