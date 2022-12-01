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
    <Fragment>
      <div className="z-0 w-screen xl:w-[1920px] h-max bg-abi  relative overflow-hidden flex justify-center ">
        {/* <div className="flex flex-col "> */}
        <div className="z-10 absolute rounded-full w-[759px] h-[752px] lg:w-[591px] lg:h-[667px] xl:w-[951px] xl:h-[1073px] left-[52px] -top-[409px] lg:left-[836px] lg:-top-[285] xl:left-[1345px] xl:-top-[458px] bg-[#1A1538] blur-[121px] lg:blur-[113px] xl:blur-[182px]"></div>
        <div
          className="z-10 absolute rounded-[31px] w-[636px] h-[718px] lg:w-[622px] lg:h-[702px] xl:w-[1000px] xl:h-[1129px] left-[249px] top-[193px] lg:left-[912px] lg:top-[462px] xl:left-[1467px] xl:top-[743px] blur-[95px] lg:blur-[93px] xl:blur-[150px] xl:rounded-[50px]"
          style={{
            background:
              "linear-gradient(145.48deg, #6D3FFF 30.62%, #9878FF 102.3%)",
          }}
        ></div>
        {/* </div> */}
        <div className="z-10 absolute w-[605px] h-[595px] lg:w-[591px] lg:h-[667px] xl:w-[951px] xl:h-[1073px] -left-[417px] top-[558px] lg:left-[7px] lg:top-[543px] xl:left-[11px] xl:top-[873px] bg-[#1A1538] blur-[115px]  lg:blur-[113px] xl:blur-[182px] rounded-full "></div>
        <div className="z-20 w-screen xl:w-[1920px] h-max md:h-screen lg:h-full py-4 lg:py-2  relative flex flex-col lg:flex-row flex-nowrap justify-start items-center lg:items-start gap-6 lg:gap-2 ">
          <div className="relative lg:hidden w-full flex flex-row items-center justify-start h-10 pr-[22px]">
            {/* <!-- hamburgur menu --> */}
            <HamburgerMenu
              className="h-full w-full flex flex-row justify-start "
              menuItems={menuItems}
            />
          </div>
          <div className="flex flex-col flex-nowrap justify-center items-center w-full h-max lg:w-[300px] xl:w-[484px] lg:mx-5 lg:mt-14 xl:mt-[103px]">
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
                    background:
                      "linear-gradient(319deg, #0898E7 5%, #49BFFF 94%)",
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
            <div
              className="z-20 rounded-2xl w-11/12 lg:w-full h-[155px] lg:h-[208px] xl:h-[336px]  flex  p-[42px] flex-row lg:flex-col flex-nowrap justify-center items-center gap-6 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(112.32deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 101.12%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="z-30 absolute w-[173px] h-[167px] xl:w-[239px] xl:h-[239px] -left-10 -top-20 rounded-full "
                style={{
                  background:
                    "linear-gradient(12.44deg, rgba(255, 255, 255, 0) 8%, rgba(255, 255, 255, 0) 75%)",
                  backdropFilter: "blur(12px)",
                }}
              ></div>
              <div className="z-30 absolute w-[259px] h-[251px] xl:w-[358px] xl:h-[358px] border border-white/[0.1] -left-20 -top-32 lg:-left-24  rounded-full "></div>
              <div className="z-30 absolute w-[349px] h-[339px] xl:w-[483px] xl:h-[483px] border border-white/[0.1] -left-28 -top-44 lg:-left-36  rounded-full "></div>

              <div className="z-40 w-full flex flex-col flex-nowrap justify-center gap-8 lg:gap-5 xl:gap-9 items-center  font-IRANSans text-white text-sm lg:text-xs xl:text-xl font-medium ">
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
              <div className="z-40 w-full flex flex-col flex-nowrap justify-center gap-8 lg:gap-5 xl:gap-9 items-center  font-IRANSans text-white text-sm lg:text-xs xl:text-xl font-medium ">
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
            <div className="z-40 hidden lg:flex flex-row flex-nowrap justify-center items-center gap-2 lg:mt-[26px] lg:mb-[140px] xl:mt-[42px]  xl:mb-56">
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
          <div className="w-11/12 lg:w-10/12 xl:w-[1394px]  h-full lg:h-[755px] xl:h-[1215px] px-5 lg:pb-[90px] lg:ml-4 lg:mr-0  py-[22px]  xl:pb-36 xl:my-[18px] bg-[#F6F8FB] rounded-2xl xl:rounded-3xl">
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
      </div>
    </Fragment>
  );
};

export default Dashboard;
