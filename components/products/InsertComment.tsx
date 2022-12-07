import StarRating from "@components/ui/StarRating";

const InsertComment: React.FC = () => {
  return (
    <div className=" w-full lg:w-[45%]  px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans  gap-2  mt-8 lg:mt-0 ">
      <div className="w-full flex flex-col justify-center items-center p-6  shadow-[0_4px_21px_rgba(38,78,118,0.08)] text-[9px] text-white bg-[#2F80ED] text-right rounded-[10px] xl:rounded-[20px] px-8 lg:px-10 xl:px-16 py-6 lg:py-7 xl:py-11 gap-2 xl:gap-3">
        <h5 className="w-full text-white text-sm lg:text-base xl:text-[25px] xl:font-medium font-normal leading-8 xl:leading-10 text-right ">
          ثبت دیدگاه
        </h5>
        <form className="w-full flex flex-col flex-nowrap justify-center items-center gap-4 xl:gap-8">
          <div className="w-full flex flex-row justify-start items-center text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="rate">امتیاز شما:</label>
            <StarRating />
          </div>
          <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="commentText">دیدگاه شما:</label>
            <textarea
              rows={10}
              cols={45}
              className="rounded-md w-full h-[138px] lg:h-40 xl:h-64"
            ></textarea>
          </div>
          <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="user-name">
              نام شما:<span className="text-[#EB5757]">*</span>
            </label>
            <input
              type="text"
              id="user-name"
              className="w-full h-7 lg:h-[30px]  xl:h-12 px-4 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start text-[8px] lg:text-xxs xl:text-base gap-2">
            <label htmlFor="email">
              ایمیل شما:<span className="text-[#EB5757]">*</span>
            </label>
            <input
              type="text"
              id="email"
              className="w-full h-7 lg:h-[30px]  xl:h-12 px-4 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2">
            <button className="bg-[#FBBC05] rounded-sm lg:rounded h-8 w-20 lg:w-24 lg:h-9 xl:w-[150px] xl:h-14 xl:rounded-[5px] text-[9px] lg:text-xxs xl:text-base lg:leading-4 font-bold text-center">
              ثبت دیدگاه
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default InsertComment;
