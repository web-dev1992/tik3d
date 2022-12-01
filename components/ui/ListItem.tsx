import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
interface item {
  id: string;
  name: string;
  link:string,
  address: string;
  isSpecial: boolean;
}
const ListItem: React.FC<{ item: item, onDragStart?:(FromEvent)=>void  }> = ({ item }) => {
  const router=useRouter();
  return (
    <div className="bg-white font-IRANSans rounded-md shadow-[0_4px_7px_rgba(0,0,0,0.1)]  p-2 w-[100px]  xl:w-40 h-36  xl:h-56 flex flex-col flex-nowrap justify-center items-center gap-2 relative">
      {item.isSpecial && (
        <>
          <div className="absolute top-[2px] left-4 z-10 xl:hidden ">
            <Image
              src="/images/special.png"
              alt="special"
              width={18}
              height={10}
            />
          </div>
          <div className="hidden xl:inline-block absolute top-3 left-6 z-10  ">
            <Image
              src="/images/special.png"
              alt="special"
              width={33}
              height={18}
            />
          </div>
        </>
      )}
      <div className="rounded overflow-hidden xl:hidden ">
        <Link href={item.link}><Image alt="image-poster" src="/images/image-poster.png" width={80} height={80} objectFit="contain" /></Link>
      </div>      
      <div className="hidden rounded overflow-hidden xl:flex">
      <Link href={item.link}><Image alt="image-poster" src="/images/image-poster.png" width={125} height={125} objectFit="contain" /></Link>
       
      </div>
      <p className=" pr-1 xl:pr-2 w-full flex flex-row justify-end text-right text-[7px] font-medium text-[#1B1A21] leading-[11px] xl:text-xs">
        {item.name}
      </p>
      <div className="w-full flex flex-row justify-center items-center">
        <button
          className="w-12 h-3.5  rounded flex flex-row justify-center items-center text-white font-normal text-[6px] leading-[10px]  xl:text-[10px] xl:leading-[15px] xl:w-[87px] xl:h-[22px] bg-abi"
          type="button"
          onClick={()=>{router.push(item.link)}}
        >
          مشاهده و دانلود
        </button>
      </div>
    </div>
  );
};

export default ListItem;
