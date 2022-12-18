import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
interface item {
  id: string;
  name: string;
  link: string;
  address: string;
  isSpecial: boolean;
}
const ListItem: React.FC<{ item: item; onDragStart?: (FromEvent) => void }> = ({
  item,
}) => {
  const router = useRouter();
  return (
    <div className="bg-white font-IRANSans rounded-md shadow-[0_4px_7px_rgba(0,0,0,0.1)]  p-2 w-[100px]  xl:w-40 h-36  xl:h-56 flex flex-col flex-nowrap justify-center items-center gap-2 relative">
      {item.isSpecial && (
        <div className="relative w-[18px] h-2.5 xl:w-[34px] xl:h-[18px]">
          <div className="absolute top-[2px] left-4 z-10 xl:top-3 xl:left-6 ">
            <Image src="/images/special.png" alt="special" layout="fill" />
          </div>
        </div>
      )}
      <div className="rounded overflow-hidden relative aspect-square w-20 h-20 xl:w-[125px] xl:h-[125px]">
        <Link href={item.link} passHref>
          <a className="w-full h-full relative">
            <Image alt="image-poster" src={item.address} layout="fill" />
          </a>
        </Link>
      </div>

      <p className=" pr-1 xl:pr-2 w-full flex flex-row justify-end text-right text-[7px] font-medium text-[#1B1A21] leading-[11px] xl:text-xs">
        {item.name}
      </p>
      <div className="w-full flex flex-row justify-center items-center">
        <button
          className="w-12 h-3.5  rounded flex flex-row justify-center items-center text-white font-normal text-[6px] leading-[10px]  xl:text-[10px] xl:leading-[15px] xl:w-[87px] xl:h-[22px] bg-abi"
          type="button"
          onClick={() => {
            router.push(item.link);
          }}
        >
          مشاهده و دانلود
        </button>
      </div>
    </div>
  );
};

export default ListItem;
