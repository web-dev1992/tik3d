import React from "react";
import Image from "next/image";
import Link from "next/link";

interface commentProp {
  id: string;
  name: string;
  userName: string;
  image: string;
  star: number;
  comment: string;
}

const Comment: React.FC<{ comment: commentProp; onDragStart?: (FromEvent) => void; }> = ({ comment }) => {
  const stars = [];
  for (let i = 0; i < comment.star; i++) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#56CCF2"
        viewBox="0 0 24 24"
        strokeWidth={0}
        stroke="currentColor"
        className="w-3.5 h-3.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    );
  }
  for (let i = 0; i < 5 - comment.star; i++) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#E4E4E4"
        viewBox="0 0 24 24"
        strokeWidth={0}
        stroke="currentColor"
        className="w-3.5 h-3.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    );
  }
  return (
    <div
      className="flex flex-col flex-nowrap justify-center items-start pr-[22px] pl-2 py-[18px]  w-[233px] lg:w-[262px] xl:w-[400px] h-max rounded-sm bg-white shadow-lg  "
      style={{ direction:"rtl" }}
    >
      <div className="flex flex-row flex-nowrap justify-start items-center mb-2">
        {stars}
      </div>
      <h6 className="text-xxs xl:text-base font-bold text-[#343D48] leading-4 lg:leading-5 xl:leading-8">
        {comment.name}
      </h6>
      <p className="text-xxs lg:text-[11px] xl:text-lg text-right font-normal text-[#343D48] tracking-normal leading-[15px] lg:leading-[17px] xl:leading-7 pb-2 lg:pb-4">
        {comment.comment}
      </p>
      <div className="flex flex-row flex-nowrap justify-start w-max h-max  mt-4 lg:mt-8  gap-2.5 xl:gap-5 ">
        <div className="flex xl:hidden justify-center items-center">
          <Image
            src={comment.image}
            alt="user-image"
            width={40}
            height={40}
          />
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <Image
            src={comment.image}
            alt="user-image"
            width={75}
            height={75}
          />
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-start w-full h-full  ">
          <span className="text-xxs xl:text-base font-bold  text-[#0F2137] leading-[22px] lg:leading-[25px] xl:leading-8">
           {comment.name}
          </span>
          <Link href="#">
            <a className="text-abiStroke leading-[22px] lg:leading-[25px] xl:leading-10 text-right text-[8px] lg:text-xxs xl:text-xs font-medium ">
              {comment.userName}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Comment;
