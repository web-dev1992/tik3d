import Image from "next/image";
import CameraIcon from "@components/ui/CameraIcon";
interface userInfoProps {
  email: string;
  family: string;
  image: string;
  isSpecialUser: boolean;
  name: string;
}

const UserInfoBox: React.FC<{ userInfo: userInfoProps }> = ({ userInfo }) => {
  return (
    <div className=" flex flex-col flex-nowrap justify-start items-center w-full h-max  ">
      <div className="w-[151px] h-[151px] xl:w-[245px] xl:h-[245px] flex flex-row justify-center items-center border-x-2 border-slate-600 rounded-full  bg-[url('/images/noise.png')] bg-no-repeat bg-cover relative">
        <div className="w-[136px] h-[136px] xl:w-[221px] xl:h-[221px] flex flex-row justify-center items-center rounded-full overflow-hidden">
          <Image
            src={
              userInfo.image !== ""
                ? userInfo.image
                : "/images/dashboard-user-image.png"
            }
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
          {`${userInfo.name}  ${userInfo.family}`}
        </h2>
        <h2 className="text-white text-lg lg:text-xs xl:text-lg font-normal tracking-[0.04em] text-center  ">
          {userInfo.email}
        </h2>
        <p className="my-2 xl:mt-4 xl:mb-6 bg-white rounded-3xl w-[75px] xl:w-[122px] xl:h-[38px] xl:rounded-[38px] h-6 flex flex-row justify-center items-center text-base xl:text-base lg:text-[10px] text-black">
          {userInfo.isSpecialUser ? "کاربر ویژه" : "کاربر عادی"}
        </p>
      </div>
    </div>
  );
};

export default UserInfoBox;