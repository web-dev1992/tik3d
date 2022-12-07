import { ReactNode } from "react";
import DashboardIcon from "@components/ui/DashboardIcon";
import ProfileIcon from "@components/ui/ProfileIcon";
import ReceiptIcon from "@components/ui/ReceiptIcon";
import SubscriptionIcon from "@components/ui/SubscriptionIcon";

const SelectContentBox: React.FC<{
  changeContentHandler: (state) => void;
  content: string;
}> = ({ changeContentHandler, content }) => {
  return (
    <div
      className="z-20 rounded-2xl w-11/12 lg:w-full h-[155px] lg:h-[208px] xl:h-[336px]  flex  p-[42px] flex-row lg:flex-col flex-nowrap justify-center items-center gap-6 xl:gap-9 relative overflow-hidden"
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

      <ContentButtonLayout>
        <ContentButton
          content={content}
          state="dashboard"
          changeContentHandler={changeContentHandler}
        >
          <DashboardIcon />
          <span>داشبورد</span>
        </ContentButton>
        <ContentButton
          content={content}
          state="subscription"
          changeContentHandler={changeContentHandler}
        >
          <SubscriptionIcon />
          <span>اشتراک ها</span>
        </ContentButton>
      </ContentButtonLayout>
      <ContentButtonLayout>
        <ContentButton
          content={content}
          state="payments"
          changeContentHandler={changeContentHandler}
        >
          <ReceiptIcon />
          <span>پرداخت ها</span>
        </ContentButton>

        <ContentButton
          content={content}
          state="profile"
          changeContentHandler={changeContentHandler}
        >
          <ProfileIcon />
          <span>پروفایل</span>
        </ContentButton>
      </ContentButtonLayout>
    </div>
  );
};

interface contetnProps {
  content: string;
  state: string;
  changeContentHandler: (state: string) => void;
  children: ReactNode;
}
const ContentButtonLayout = (props) => {
  return (
    <div className="z-40 w-full flex flex-col flex-nowrap justify-center gap-8 lg:gap-5 xl:gap-9 items-center  font-IRANSans text-white text-sm lg:text-xs xl:text-xl font-medium ">
      {props.children}
    </div>
  );
};
const ContentButton = (props) => {
  return (
    <button
      className={`w-full flex flex-row gap-4 xl:gap-6 items-center justify-start ${
        props.content == props.state ? "opacity-100" : "opacity-50"
      }`}
      onClick={() => {
        props.changeContentHandler(props.state);
      }}
    >
      {props.children}
    </button>
  );
};
export default SelectContentBox;
