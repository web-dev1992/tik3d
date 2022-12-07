import Image from "next/image";
import Link from "next/link";
const CardImage: React.FC<{
  image: string;
  isSpecial: boolean;
  link: string;
}> = ({ link, image, isSpecial }) => {
  return (
    <>
      {isSpecial && (
        <div className="absolute w-[18px] h-2.5 xl:w-8 xl:h-[18px] top-2.5 left-4 z-10 xl:top-[19px] xl:left-6 ">
          <Image src="/images/special.png" alt="special" layout="fill" />
        </div>
      )}
      <div className="relative rounded xl:rounded-lg overflow-hidden w-[80px] h-[80px] xl:w-[125px] xl:h-[125px]">
        <Link href={link}>
          <Image alt="image-poster" src={image} layout="fill" />
        </Link>
      </div>
    </>
  );
};

export default CardImage;
