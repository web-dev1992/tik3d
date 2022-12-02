import { Fragment, useState } from "react";
import LeftArrow from "@components/ui/LeftArrow";
import PercentIcon from "@components/ui/PercentIcon";

const subscriptions = [
  { id: "s1", month: "1", price: "49,000", basePrice: "99,000" },
  { id: "s2", month: "2", price: "49,000", basePrice: "99,000" },
  { id: "s3", month: "3", price: "49,000", basePrice: "99,000" },
];

const SubscriptionContent = () => {
  const [showDiscount, setShowDiscount] = useState(false);
  const openCloseDiscount = () => {
    setShowDiscount((prev) => !prev);
  };
  return (
    <Fragment>
      <div className="w-full h-max flex flex-col flex-nowrap justify-center items-center gap-3 lg:gap-4">
        <h2 className="w-full font-bold text-base xl:text-2xl tracking-normal text-right text-[#11282E] lg:leading-[34px] xl:leading-[55px] ">
          لیست اشتراک
        </h2>
        <div className="w-full flex flex-col flex-nowrap justify-center items-start gap-[7px] lg:gap-2.5 xl:gap-4 ">
          {subscriptions.map((subscription, index) => (
            <div
              key={index}
              className="h-10 flex flex-row flex-nowrap justify-start items-center w-full group hover:bg-[#2F80ED] hover:text-white active:bg-[#2F80ED] active:text-white lg:h-14 xl:h-[90px] py-[3px] px-3 lg:px-4 xl:px-[30px] gap-4 bg-[#F6F8FB] border border-[#E2E2E2] rounded lg:rounded-md xl:rounded-[10px]"
            >
              <div className="w-2/3 flex flex-row flex-nowrap justify-start items-center gap-4 ">
                <button
                  className="text-white rounded xl:rounded-lg w-[18px] h-[18px] lg:w-[26px] lg:h-[26px] xl:w-[42px] xl:h-[42px] text-center font-medium text-[8px] lg:text-xs xl:text-xl leading-[13px] xl:leading-[30px]"
                  style={{
                    background:
                      "linear-gradient(319deg,#0898E7,5.17%,rgba(8,152,231,0.5)94%)",
                  }}
                >
                  {index + 1}
                </button>
                <div className="w-2/3 flex flex-col flex-nowrap justify-center items-between">
                  <h3 className="w-full h-1/2 text-[7px] lg:text-[10px] xl:text-base lg:leading-[21px] xl:leading-8 tracking-normal font-medium leading-[14px] text-right group-hover:text-white">
                    اشتراک {subscription.month}ماهه
                  </h3>
                  <div className="h-1/2 flex flex-row justify-start gap-4 text-[7px] lg:text-[9px] xl:text-[14px]">
                    <span className=" line-through leading-[14px] text-[#0F2137]  group-hover:text-white">
                      {subscription.basePrice}تومان
                    </span>
                    <span className=" font-semibold text-[#2F80ED] leading-[14px] group-hover:text-white">
                      {subscription.price}تومان
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-1/3 flex flex-row flex-nowrap justify-end items-center gap-1 lg:gap-2">
                <span className="text-[7px] lg:text-[10px] xl:text-base lg:leading-[21px] text-[#2F80ED] group-hover:text-white font-medium leading-[14px]">
                  انتخاب و ادامه
                </span>
                <span className="text-[#2F80ED] group-hover:text-white">
                  <LeftArrow />
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="h-max w-full">
          <div
            className={` w-full h-10 lg:h-14 xl:h-[90px] xl:rounded-[10px] py-[3px] px-3 lg:px-4 xl:px-[30px] flex flex-row flex-nowrap justify-start items-center border border-[#E2E2E2] rounded lg:rounded-md bg-white  group hover:bg-[#F5F5F5] focus:bg-[#F5F5F5] ${
              showDiscount && "bg-[#F5F5F5]"
            }`}
          >
            <button
              className={`w-full h-full py-1 flex flex-row items-center justify-between  pl-1 bg-white group-hover:bg-[#F5F5F5] font-IRANSans font-medium text-[7px] lg:text-[10px] xl:text-base text-right leading-[14px] text-black ${
                showDiscount && "bg-[#F5F5F5]"
              }`}
              onClick={openCloseDiscount}
              type="button"
            >
              <span className="flex flex-row flex-nowrap items-center justify-start">
                <span className="w-5 h-5 lg:w-[30px] lg:h-[30px] xl:w-[42px] xl:h-[42px] flex flex-row justify-center  items-center rounded-full bg-[#E2E2E2] ">
                  <PercentIcon />
                </span>
                <span className="   px-2 font-medium text-[8px] lg:text-[10px] xl:text-base text-right leading-[14px] text-black">
                  کد تخفیف
                </span>
              </span>
              <svg
                className={` w-1.5 h-4 lg:w-2.5 lg:h-5 xl:w-3.5 xl:h-6 transform transition  ${
                  showDiscount && "rotate-180"
                }`}
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.807523 0.82404C1.07537 0.550819 1.49451 0.52598 1.78987 0.749525L1.87449 0.82404L7.91988 6.99093L13.9653 0.82404C14.2331 0.550818 14.6523 0.52598 14.9476 0.749524L15.0322 0.82404C15.3001 1.09726 15.3244 1.52481 15.1053 1.82609L15.0322 1.9124L8.45336 8.62322C8.18551 8.89645 7.76637 8.92128 7.47102 8.69774L7.3864 8.62322L0.807523 1.9124C0.512889 1.61186 0.512889 1.12458 0.807523 0.82404Z"
                  fill="#2F80ED"
                />
              </svg>
            </button>
          </div>
          {showDiscount && (
            <div className="  w-full h-10 lg:h-14 xl:h-[90px] xl:rounded-b-[10px] py-[3px] px-3 lg:px-4 xl:px-[30px] flex flex-row flex-nowrap justify-center lg:justify-start items-center border border-[#E2E2E2] rounded-b lg:rounded-b-md bg-white ">
              <form className="w-full h-full flex flex-row flex-nowrap justify-between items-center">
                <label
                  htmlFor="discount_code"
                  id="discountlbl"
                  className="w-1/3 text-light text-[7px] text-right lg:text-xxs xl:text-base "
                >
                  کد را وارد کنید:
                </label>
                <div className="flex flex-row flex-nowrap justify-center lg:justify-end items-center gap-1 w-2/3 ">
                  <input
                    type="text"
                    name="discount_code"
                    className="w-24 lg:w-[137px] xl:w-56 h-5 lg:h-7 xl:h-12 rounded-sm lg:rounded border border-[#DADADA] focus:border-blue-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-white bg-abi text-center text-[7px] lg:text-xxs xl:text-base text-bold rounded-sm w-10 lg:w-14 xl:w-24 h-5 lg:h-7 lg:rounded xl:h-12"
                  >
                    تایید کد
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-nowrap w-full gap-1 xl:gap-2 ">
        <h3 className="w-full text-black text-[7px] lg:text-[10px] xl:text-base font-medium leading-[14px] lg:leading-[21px] xl:leading-8 text-right tracking-wide">
          ویژگی های اشتراک
        </h3>
        <p className="w-full text-[#333333] text-[6px] lg:text-[9px] xl:text-[14px] font-light text-right leading-[9px] lg:leading-4 xl:leading-[21px] tracking-widest lg:tracking-wide lg:pb-20 xl:pb-24">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
        </p>
      </div>
    </Fragment>
  );
};

export default SubscriptionContent;
