import { useState, useEffect } from "react";
import Image from "next/image";

import CardLayout from "@components/ui/CardLayout";
import CardItemName from "@components/ui/CardItemName";
import CardButton from "@components/ui/CardButton";
import CardAudioPlayer from "@components/ui/PlayerComponents/CardAudioPlayer";

interface audio {
  id: string;
  name: string;
  ligthImage: string;
  address: string;
  isSpecial: boolean;
  link: string;
}
const AudioItem: React.FC<{ audio: audio }> = ({ audio }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <CardLayout>
      {audio.isSpecial && (
        <>
          <div className="absolute top-3 left-4 xl:top-[18px] xl:left-6 z-10 w-[18px] h-2.5  xl:w-[33px] xl:h-[18px]   ">
            <Image src="/images/special.png" alt="special" layout="fill" />
          </div>
        </>
      )}
      <CardAudioPlayer fileAddress={audio.address} />
      <CardItemName itemName={audio.name} />
      <CardButton link={audio.link} />
    </CardLayout>
  );
};

export default AudioItem;
