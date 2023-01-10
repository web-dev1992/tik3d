import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ObjectId } from "mongodb";

interface commentProp {
  _id: ObjectId;
  productId: ObjectId;
  name: string;
  email: string;
  star: number;
  image?: string;
  comment: string;
}

const CommentsList: React.FC<{ commentsList: commentProp[] }> = ({
  commentsList,
}) => {
  return (
    <div className="px-3 w-full lg:w-[55%] flex flex-col flex-nowrap justify-center items-start gap-4 lg:gap-6 xl:gap-9">
      {commentsList.map((comment) => (
        <Comment comment={comment} key={comment._id.toString()} />
      ))}
    </div>
  );
};
const Comment: React.FC<{ comment: commentProp }> = ({ comment }) => {
  const indexOfAt = comment.email.indexOf("@");
  const userName = comment.email.slice(0, indexOfAt + 1);
  const stars = [];
  for (let i = 0; i < comment.star; i++) {
    stars.push(
      <svg
        key={i + 10}
        xmlns="http://www.w3.org/2000/svg"
        fill="#56CCF2"
        viewBox="0 0 24 24"
        strokeWidth={0}
        stroke="currentColor"
        className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 xl:w-5 xl:h-5"
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
        key={i + 20}
        xmlns="http://www.w3.org/2000/svg"
        fill="#E4E4E4"
        viewBox="0 0 24 24"
        strokeWidth={0}
        stroke="currentColor"
        className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 xl:w-5 xl:h-5"
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
    <div className="w-full flex flex-col justify-center items-center shadow-[0_4px_21px_rgba(38,78,118,0.08)]  bg-white rounded-[9px] lg:rounded-[12px] xl:rounded-[20px] p-4 xl:p-[50px] ">
      <div className="w-full flex flex-row flex-nowrap justify-between items-center  ">
        <div className="flex flex-row flex-nowrap justify-start w-full h-max  gap-2 xl:gap-4 ">
          <div className="flex justify-center items-center aspect-square w-6 h-6 lg:w-[34px] lg:h-[34px] xl:w-[55px] xl:h-[55px] relative">
            {comment.image && (
              <Image src={comment.image} alt="user-image" layout="fill" />
            )}
          </div>

          <div className="flex flex-col flex-nowrap justify-center items-start w-full h-max gap-0  ">
            <span className="text-[7px] lg:text-[10px] xl:text-base lg:leading-6 xl:leading-6 font-bold  text-[#0F2137]   ">
              {comment.name}
            </span>
            <Link href="#">
              <a
                className="text-abiStroke leading-normal lg:leading-6 xl:leading-6 text-right text-[7px] lg:text-[9px] xl:text-sm font-medium tracking-tight "
                style={{ direction: "ltr" }}
              >
                {userName}
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap justify-start items-center  gap-0 ">
          {stars}
        </div>
      </div>
      <p className="text-[7px] lg:text-[10px]  xl:text-base text-right font-normal text-[#343D48] leading-[11px] lg:leading-4 xl:leading-6 tracking-wider pl-8 my-3">
        {comment.comment}
      </p>
    </div>
  );
};

export default CommentsList;
