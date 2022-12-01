import { useState, Fragment } from "react";
import Image from "next/image";
import HamburgerMenu from "@components/dashboard/HamburgerMenu";
import CameraIcon from "@components/ui/CameraIcon";
import DashboardIcon from "@components/ui/DashboardIcon";
import ProfileIcon from "@components/ui/ProfileIcon";
import ReceiptIcon from "@components/ui/ReceiptIcon";
import SubscriptionIcon from "@components/ui/SubscriptionIcon";
import DashboardContent from "./DashboardContent";
import DashboardHeader from "@components/layout/DashboardHeader";
import ExitIcon from "@components/ui/ExitIcon";
import SettingIcon from "@components/ui/SettingIcon";
import SubscriptionContent from "./SubscriptionContent";
import PaymentContent from "./PaymentContent";
import ProfileContent from "./ProfileContent";
const menuItems = [
  { label: "صفحه نخست", href: "/" },
  { label: "دانلود رایگان", href: "/downloads" },
  { label: "محصولات", href: "/products" },
  { label: "تماس با ما", href: "/contact-us" },
  { label: "درباره ما", href: "/about-us" },
];
const Dummy_user_info = {
  name: "احسان دلیخون",
  email: "ehsandeli@gmail.com",
  isSpecial: true,
};
const Dashboard = () => {
  const [content, setContent] = useState("dashboard");

  return (
    <div className="w-screen h-max md:h-screen lg:h-full py-4 lg:py-2 bg-[#1A1538] relative flex flex-col lg:flex-row flex-nowrap justify-start items-center lg:items-start gap-6 lg:gap-2 bg-[url('/images/dashboard-bg.jpg')] lg:bg-[url('/images/dashboard-bg-lg.jpg')]  bg-no-repeat bg-cover">
      <div className="relative lg:hidden w-full flex flex-row items-center justify-start h-10 pr-[22px]">
        {/* <!-- hamburgur menu --> */}
        <HamburgerMenu
          className="h-full w-full flex flex-row justify-start "
          menuItems={menuItems}
        />
      </div>
      <div className="flex flex-col flex-nowrap justify-center items-center w-full h-max lg:w-[300px] xl:w-3/12 lg:mx-5 lg:mt-14 xl:mt-[103px]">
        {/* user info box */}
        <div className=" flex flex-col flex-nowrap justify-start items-center w-full h-max  ">
          <div className="w-[151px] h-[151px] xl:w-[245px] xl:h-[245px] flex flex-row justify-center items-center border-x-2 border-slate-600 rounded-full  bg-[url('/images/noise.png')] bg-no-repeat bg-cover relative">
            <div className="w-[136px] h-[136px] xl:w-[221px] xl:h-[221px] flex flex-row justify-center items-center rounded-full overflow-hidden">
              <Image
                src="/images/dashboard-user-image.png"
                alt="dashboard-user-image"
                width={221}
                height={221}
              />
            </div>
            <div
              className=" absolute top-32 xl:top-[205px] right-4 xl:right-6 h-4 w-4 xl:w-6 xl:h-6 rounded-full flex flex-row justify-center items-center  shadow-[0_0_16px_#2F80ED]"
              style={{
                background: "linear-gradient(319deg, #0898E7 5%, #49BFFF 94%)",
              }}
            >
              <CameraIcon />
            </div>
          </div>

          <div className="flex flex-col flex-nowrap justify-center items-center font-IRANSans my-6 xl:gap-2">
            <h2 className="text-white text-3xl lg:text-lg xl:text-3xl font-bold tracking-wider text-center  ">
              {Dummy_user_info.name}
            </h2>
            <h2 className="text-white text-lg lg:text-xs xl:text-lg font-normal tracking-[0.04em] text-center  ">
              {Dummy_user_info.email}
            </h2>
            <p className="my-2 xl:mt-4 xl:mb-6 bg-white rounded-3xl w-[75px] xl:w-[122px] xl:h-[38px] xl:rounded-[38px] h-6 flex flex-row justify-center items-center text-base xl:text-base lg:text-[10px] text-black">
              {Dummy_user_info.isSpecial && "کاربر ویژه"}
            </p>
          </div>
        </div>
        {/* select content box */}
        <div className="rounded-2xl w-11/12 lg:w-full h-[155px] lg:h-full p-[42px] bg-[url('/images/background.png')] xl:bg-[url('/images/content-bg.png')] bg-no-repeat bg-cover  flex flex-row lg:flex-col flex-nowrap justify-center items-center gap-6 ">
          <div className="w-full flex flex-col flex-nowrap justify-center gap-8 lg:gap-5 xl:gap-9 items-center  font-IRANSans text-white text-sm lg:text-xs xl:text-xl font-medium ">
            <button
              className={`w-full flex flex-row gap-4 xl:gap-6 items-center justify-start ${
                content == "dashboard" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => {
                setContent("dashboard");
              }}
            >
              <DashboardIcon />
              <span>داشبورد</span>
            </button>
            <button
              className={`w-full flex flex-row gap-4 xl:gap-6 items-center justify-start ${
                content == "subscription" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => {
                setContent("subscription");
              }}
            >
              <SubscriptionIcon />
              <span>اشتراک ها</span>
            </button>
          </div>
          <div className="w-full flex flex-col flex-nowrap justify-center gap-8 lg:gap-5 xl:gap-9 items-center  font-IRANSans text-white text-sm lg:text-xs xl:text-xl font-medium ">
            <button
              className={`w-full flex flex-row gap-4 xl:gap-6 items-center justify-start ${
                content == "payments" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => {
                setContent("payments");
              }}
            >
              <ReceiptIcon />
              <span>پرداخت ها</span>
            </button>

            <button
              className={`w-full flex flex-row gap-4 xl:gap-6 items-center justify-start ${
                content == "profile" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => {
                setContent("profile");
              }}
            >
              <ProfileIcon />
              <span>پروفایل</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex flex-row flex-nowrap justify-center items-center gap-2 lg:mt-[26px] lg:mb-[140px] xl:mt-[42px]  xl:mb-56">
          <button
            className="w-9 h-9 xl:w-14 xl:h-14 rounded-xl xl:rounded-[20px] flex flex-row justify-center items-center "
            style={{
              background:
                "linear-gradient(126deg, rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <ExitIcon />
          </button>
          <button
            className="w-9 h-9 xl:w-14 xl:h-14 rounded-xl xl:rounded-[20px] flex flex-row justify-center items-center "
            style={{
              background:
                "linear-gradient(126deg, rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <SettingIcon />
          </button>
        </div>
      </div>

      {/* main content box */}
      <div className="w-11/12 lg:w-10/12 xl:w-9/12  h-full lg:h-[755px] xl:h-[1215px] px-5 lg:pb-[90px] lg:ml-4 lg:mr-0  py-[22px]  xl:pb-36 xl:my-[18px] bg-[#F6F8FB] rounded-2xl xl:rounded-3xl">
        <div className="w-full hidden lg:flex mb-8 mt-6 xl:mt-10 xl:mb-16 ">
          <DashboardHeader />
        </div>
        <div className=" relative bg-white rounded-lg xl:rounded-2xl lg:mx-6 xl:mx-12 m-auto h-max  px-6 py-[22px] lg:px-[68px] xl:py-9 xl:px-28 flex flex-col flex-nowrap justify-center items-center gap-5 lg:gap-8 shadow-[0_6px_29px_rgba(38,78,118,0.08)]">
          {content == "dashboard" && <DashboardContent />}
          {content == "subscription" && <SubscriptionContent />}
          {content == "payments" && <PaymentContent />}
          {content == "profile" && <ProfileContent />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
