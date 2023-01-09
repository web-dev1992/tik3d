import Image from "next/image";
import { ChangeEvent } from "react";
import Swal from "sweetalert2";
import CameraIcon from "@components/ui/CameraIcon";
import toBase64 from "helper/toBase64";
import { ObjectId } from "mongodb";
interface userInfoProps {
  id: ObjectId;
  email: string;
  family: string;
  image: string;
  isSpecialUser: boolean;
  name: string;
}

const UserInfoBox: React.FC<{ userInfo: userInfoProps }> = ({ userInfo }) => {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    var filesize = e.target.files[0].size / 1024; // KB

    if (filesize > 1000) {
      Swal.fire({
        title: "خطا",
        text: "اندازه فایل بزرگ است، فایل بزرگتر از 1 مگا بایت معتبر نیست.",
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });

      return;
    }

    const base64: string = (await toBase64(e.target.files[0])) as string;
    const fileData = { base64, fileName: e.target.files[0].name };

    try {
      const result = await fetch(`/api/user/upload-image/${userInfo.id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          base64: fileData.base64,
          fileName: fileData.fileName,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex flex-col flex-nowrap justify-start items-center w-full h-max  ">
      <div className="w-[151px] h-[151px] xl:w-[245px] xl:h-[245px] flex flex-row justify-center items-center border-x-2 border-slate-600 rounded-full  bg-[url('/images/noise.png')] bg-no-repeat bg-cover relative">
        <div className="w-[136px] h-[136px] xl:w-[221px] xl:h-[221px] flex flex-row justify-center items-center rounded-full overflow-hidden">
          <Image
            src={
              userInfo.image !== ""
                ? userInfo.image
                : "/images/user-no-picture.png"
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
          <label htmlFor="file-upload">
            <CameraIcon />
            <input
              id="file-upload"
              type="file"
              accept="image/x-png, image/jpeg"
              onChange={handleFileChange}
              className=" hidden"
            />
          </label>
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
