import { FormEvent, useRef, useState } from "react";

import StarRating from "@components/ui/StarRating";
import axios from "axios";

const InsertComment: React.FC<{productId:string | string[]}> = ({productId}) => {
  
  const [ratingValue, setRatingValue] = useState<number>(0);
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const commentRef = useRef<HTMLTextAreaElement>();
  const evaluateRatinValueHandler = (ratingValue: number) => {
    setRatingValue(ratingValue);
  };
  const formSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const comment = commentRef.current.value;
    
    console.log(name, email, comment, productId, ratingValue);
    if (
      email.trim().length === 0 ||
      name.trim().length === 0 ||
      comment.trim().length === 0
    ) {
      alert("لطفا فیلد های خالی را با مقدار صحیح و نمایید");
      return;
    }
    if (!ratingValue) {
      alert("لطفا ستاره دهید!!");
      return;
    }
    if (!email.trim().includes("@")) {
      alert("لطفا یک ایمیل صحیح وارد نمایید!");
      return;
    }
    try {
      const result = await axios.post("/api/comments/post-comment", {
        productId,
        name,
        email,
        comment,
        star: ratingValue,
        image: "",
      });
      alert(result.data.message);
    } catch (error) {
      alert(error.response.data.message || "خطایی بوجود آمده است!");
    }
  };
  return (
    <div className=" w-full lg:w-[45%]  px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans  gap-2  mt-8 lg:mt-0 ">
      <div className="w-full flex flex-col justify-center items-center p-6  shadow-[0_4px_21px_rgba(38,78,118,0.08)] text-[9px] text-white bg-[#2F80ED] text-right rounded-[10px] xl:rounded-[20px] px-8 lg:px-10 xl:px-16 py-6 lg:py-7 xl:py-11 gap-2 xl:gap-3">
        <h5 className="w-full text-white text-sm lg:text-base xl:text-[25px] xl:font-medium font-normal leading-8 xl:leading-10 text-right ">
          ثبت دیدگاه
        </h5>
        <form
          onSubmit={formSubmitHandler}
          className="w-full flex flex-col flex-nowrap justify-center items-center gap-4 xl:gap-8"
        >
          <div className="w-full flex flex-row justify-start items-center text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="rate">امتیاز شما:</label>
            <StarRating evluateRating={evaluateRatinValueHandler} />
          </div>
          <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="commentText">دیدگاه شما:</label>
            <textarea
              ref={commentRef}
              rows={10}
              cols={45}
              className="rounded-md w-full h-[138px] lg:h-40 xl:h-64 text-black text-xs lg:text-sm xl:text-base"
            ></textarea>
          </div>
          <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="user-name">
              نام شما:<span className="text-[#EB5757]">*</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              id="user-name"
              className="w-full h-7 lg:h-[30px]  xl:h-12 px-4 rounded-md text-xs lg:text-sm xl:text-base text-black"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="email">
              ایمیل شما:<span className="text-[#EB5757]">*</span>
            </label>
            <input
              ref={emailRef}
              type="text"
              id="email"
              className="w-full h-7 lg:h-[30px]  xl:h-12 px-4 rounded-md text-black text-xs lg:text-sm xl:text-base"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2">
            <button className="bg-[#FBBC05] rounded-sm lg:rounded h-8 w-20 lg:w-24 lg:h-9 xl:w-[150px] xl:h-14 xl:rounded-[5px] text-[9px] lg:text-xxs xl:text-base lg:leading-4 font-bold text-center">
              ثبت دیدگاه
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsertComment;
