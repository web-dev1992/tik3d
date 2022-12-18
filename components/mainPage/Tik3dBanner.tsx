import Arrow from "@components/ui/Arrow";
import TopShine from "@components/ui/TopShine";
import BottomShine from "@components/ui/BottomShine";

const Tik3dBanner = () => {
  return (
    <div className="w-[330px] md:w-9/12 lg-w-[802px] xl:w-[1290px] h-[180px] lg:h-[124px] xl:h-[200px] m-auto pr-8 pl-6 pt-[26px]  lg:pl-8 lg:py-5 lg:pr-[51px] xl:py-[34px] xl:pr-20 xl:pl-5 text-white font-IRANSans flex flex-col md:flex-row-reverse  flex-nowrap  justify-center items-center lg:justify-start gap-5 lg:gap-9 xl:gap-12 rounded-[10px] bg-[#2F80ED] mb-10">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center  ">
        <h3 className="w-full text-white  text-right text-xl lg:text-[22px] leading-6 lg:leading-[34px] xl:text-4xl tracking-tighter xl:tracking-[-1.5px] font-medium xl:leading-[60px]">
          TIK3D مناسب چه کسانی است؟
        </h3>
        <p className="text-white text-xs lg:text-sm xl:text-xl lg:font-medium lg:leading-[22px]  text-right  leading-5 tracking-wide">
          معماران، افراد مشغول در حوزه انیمیشن،گیم و یا افرادی که علاقمند به
          حوزه سه بعدی هستند.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-row-reverse flex-nowrap gap-[30px] xl:gap-[48px] justify-center lg:justify-end ">
        <span className="hidden md:flex items-center">
          <Arrow />
        </span>
        <div className="flex flex-col justify-center items-center gap-1 xl:gap-3 leading-[18px] ">
          <TopShine />
          <button className="bg-white text-[#2F80ED] text-center font-bold text-xxs lg:text-sm xl:text-2xl xl:leading-[34px] w-28 h-7 lg:w-40 lg:h-10 xl:w-64 xl:h-14 rounded-sm">
            دانلود رایگان
          </button>
          <BottomShine />
        </div>
      </div>
    </div>
  );
};

export default Tik3dBanner;
