import ArrowRight from "@components/ui/ArrowRight";
import Image from "next/image";
import Link from "next/link";

const Tik3dDesignApp = () => {
  const listItems = [
    "دانلود سریع و نصب آسان",
    "قابلیت استفاده از برنامه به صورت آفلاین",
    "کاملترین دیتابیس سه بعدی",
    "بالا بردن سرعت و راندمان کار شما",
  ];
  return (
    <div className="w-11/12 lg:w-9/12 xl:w-11/12 flex flex-col md:flex-row flex-nowrap justify-center items-center   mt-32 mb-16 md:my-20 m-auto ">
      <div className="relative w-[311px] h-[348px]  md:w-[393px] md:h-[439px] xl:w-[633px] xl:h-[707px] flex justify-center items-center   ">
        <Link href="/" passHref>
          <a className="w-full h-full relative">
            <Image src="/images/shutter.png" alt="shutterstock" layout="fill" />
          </a>
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex flex-col flex-nowrap justify-center items-start h-max text-navyBluee font-IRANSans">
        <h1 className="text-right text-4xl xl:5xl font-bold text-navyBlue leading-[47px] xl:leading-[60px] tracking-[-0.89px] my-4">
          ۲۰ برابر سریع تر طراحی کنید!
        </h1>
        <p className="text-xxs md:text-[11px] lg:text-lg font-normal text-right leading-5 xl:leading-7 text-navyBlue opacity-60">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است.
        </p>
        <ul className="mt-7 mb-6 flex flex-col justify-center items-start text-xs lg:text-lg xl:leading-7 gap-2 ">
          {listItems.map((item) => (
            <li
              key={item}
              className="flex flex-row flex-nowrap justify-start items-center gap-2"
            >
              <Image src="/images/tick.png" alt="tick" width={16} height={16} />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-row flex-nowrap justify-center items-center gap-2 text-[#2F80ED] text-xxs lg:text-base font-bold">
          <ArrowRight />
          <span>دانلود رایگان</span>
        </div>
      </div>
    </div>
  );
};

export default Tik3dDesignApp;
