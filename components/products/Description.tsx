const Description: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className=" w-full  lg:w-[55%] px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans text-[#0F2137] gap-2   ">
      <h2 className="font-bold text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal ">
        توضیحات
      </h2>
      <p className="w-full text-[8px] lg:text-[9px] xl:text-sm font-light leading-5 xl:leading-6 tracking-wider text-[#666] text-right bg-white shadow-[0_4px_21px_rgba(38,78,118,0.08)] rounded-[10px] xl:rounded-[20px] xl:py-[88px] xl:pr-[61px] xl:pl-20 lg:py-14 lg:pr-[38px] lg:pl-[50px] p-6 xl:px-6 ">
        {text}
      </p>
    </div>
  );
};

export default Description;
