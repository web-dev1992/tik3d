import AddCircleIcon from "@components/ui/AddCircleIcon";
import InstaIcon from "@components/ui/SocialMedia/InstaIcon";
import PhoneIcon from "@components/ui/SocialMedia/PhoneIcon";
import TelegramIcon from "@components/ui/SocialMedia/TelegramIcon";
import { Fragment } from "react";

const DashboardContent: React.FC<{
  expireDate: Date;
  faExpireDate: string[];
  changeContentHandler: (string) => void;
}> = ({ expireDate, faExpireDate, changeContentHandler }) => {
  const calRemindedDays = (expireDate: Date): string => {
    let difference = new Date(expireDate).getTime() - new Date().getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays.toString();
  };
  return (
    <Fragment>
      <div className="w-full lg:w-9/12 border border-[#4F96FF] rounded-3xl xl:rounded-[40px] flex flex-col flex-nowrap justify-center items-center gap-6 lg:gap-8 xl:gap-10 lg:mb-32 xl:mb-56">
        <div className="bg-abiStroke rounded-b-xl xl:rounded-b-3xl text-white h-10 w-[132px] lg:w-[151px] xl:w-60 xl:h-[73px] lg:h-11 text-sm lg:text-base xl:text-2xl font-bold flex flex-row justify-center items-center ">
          مدت اعتبار اشتراک
        </div>
        <div
          className="flex flex-row flex-nowrap justify-center items-center gap-4 lg:gap-[30px] xl:gap-12 text-xl lg:text-2xl xl:text-4xl text-[#0F2137] leading-[30px] font-medium"
          style={{ direction: "ltr" }}
        >
          <span>{faExpireDate[0] ?? 0}</span>
          <span className="text-[#4F96FF]">/</span>
          <span>{faExpireDate[1] ?? 0}</span>
          <span className="text-[#4F96FF]">/</span>
          <span>{faExpireDate[2] ?? 0}</span>
        </div>
        <button
          onClick={() => changeContentHandler("subscription")}
          className="flex flex-row flex-nowrap justify-center items-center gap-1 text-[#4F96FF] text-sm lg:text-base xl:text-2xl leading-7"
        >
          <AddCircleIcon />
          افزودن
        </button>
        <div className="bg-[#4F96FF] rounded-t-xl xl:rounded-t-3xl text-white h-10 w-[132px] lg:w-[151px] lg:h-11 xl:w-60 xl:h-[73px]  text-sm lg:text-base xl:text-2xl font-bold flex flex-row justify-center items-center ">
          {expireDate && expireDate !== null
            ? calRemindedDays(expireDate) + "روز مانده"
            : "بدون اشتراک"}
        </div>
      </div>
      <div className="lg:absolute lg:-bottom-5 flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-2 lg:gap-6 ">
        <div className="flex flex-row flex-nowrap justify-center items-center gap-2 lg:gap-6">
          <SocialMediaButton>
            <PhoneIcon />
            <span>09127330814</span>
          </SocialMediaButton>
          <SocialMediaButton>
            <InstaIcon />
            <span>اینستاگرام</span>
          </SocialMediaButton>
        </div>
        <div className="flex flex-row flex-nowrap justify-center items-center gap-2 lg:gap-6">
          <SocialMediaButton>
            <TelegramIcon />
            <span>کانال تلگرام</span>
          </SocialMediaButton>
          <SocialMediaButton>
            <TelegramIcon />
            <span>گروه تلگرام</span>
          </SocialMediaButton>
        </div>
      </div>
    </Fragment>
  );
};

const SocialMediaButton = (props) => {
  return (
    <button className="w-28 h-10 xl:h-16 xl:w-[180px] bg-white rounded xl:rounded-[5px] px-2.5 py-3 flex flex-row flex-nowrap justify-center items-center gap-2 text-[#535353] text-[11px] xl:text-lg leading-[22px] font-medium shadow-[0_3px_30px_rgba(132,132,132,0.25)] xl:shadow-[0_6px_47px_rgba(132,132,132,0.25)]">
      {props.children}
    </button>
  );
};
export default DashboardContent;
