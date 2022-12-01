import CancelIcon from "@components/ui/CancelIcon";
import ConfirmIcon from "@components/ui/ConfirmIcon";
import EditIcon from "@components/ui/EditIcon";
import { useState, useRef, FormEvent } from "react";
const userInfo = {
  id: "u1",
  name: "احسان",
  family: "دلیخون",
  mobile: "09198564724",
  email: "elsandeli@gmail.com",
  password: "1234567",
  sex: 1,
};
const ProfileContent = () => {
  const [editMode, setEditMode] = useState(false);
  const [isMale, setIsMale] = useState<boolean>(!!userInfo.sex);

  const editModeHandler = () => {
    setEditMode((prev) => !prev);
  };
  const sexHandler = () => {
    setIsMale((prev) => !prev);
  };
  const changeInfoHandler = () => {};
  return (
    <div className="w-full  flex flex-col flex-nowrap justify-center items-center gap-3 xl:gap-[33px] ">
      <h1 className="w-full text-right text-[#11282E] font-bold text-base xl:text-2xl laeding-[37px] lg:leading-[34px] xl:leading-[55px] tracking-wide">
        اطلاعات کاربری
      </h1>
      <form
        onSubmit={changeInfoHandler}
        className="w-full flex flex-col flex-nowrap justify-center items-center gap-5 xl:gap-[30px]"
      >
        {/* name and family */}
        <div className="w-full  flex flex-col lg:flex-row flex-nowrap justify-start items-center gap-5 lg:gap-[31px] xl:gap-[51px] ">
          {/* name */}
          <div className="w-full lg:w-1/2 flex flex-col flex-nowrap gap-1 ">
            <div className="w-full flex flex-row justify-between items-center">
              <label
                htmlFor="uname"
                id="namelbl"
                className="w-1/2 text-[#333333] font-light text-[11px] xl:text-base leading-4 xl:leading-6 text-right  "
              >
                نام
              </label>
              {!editMode && (
                <button
                  className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                  onClick={editModeHandler}
                >
                  <EditIcon />
                  <span>ویرایش</span>
                </button>
              )}
              {editMode && (
                <div className="flex flex-row flex-nowrap justify-end items-center gap-2">
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <ConfirmIcon />
                    <span>تایید </span>
                  </button>
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#EB5757] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <CancelIcon className="w-[7px] h-1.5 xl:w-2 xl:h-2" />
                    <span>انصراف</span>
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-center items-center">
              <input
                type="text"
                name="uname"
                id="uname"
                disabled={!editMode}
                className={`w-full h-10 xl:h-[58px] px-3 py-2.5 xl:px-5 xl:py-4  text-xs xl:text-lg text-[#888888] text-light text-right leading-[18px] font-normal border  rounded-[7px] xl:rounded-[10px] focus:outline-none ${
                  editMode ? "border-[#2F80ED]" : "border-[#E3E1E3]"
                }`}
                defaultValue={userInfo.name}
                required
                minLength={3}
                maxLength={20}
              />
            </div>
          </div>
          {/* family */}
          <div className="w-full lg:w-1/2 flex flex-col flex-nowrap gap-1">
            <div className="w-full flex flex-row justify-between items-center">
              <label
                htmlFor="family"
                id="familylbl"
                className="w-1/2 text-[#333333] font-light text-[11px] xl:text-base leading-4 xl:leading-6 text-right "
              >
                نام خانوادگی
              </label>
              {!editMode && (
                <button
                  className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                  onClick={editModeHandler}
                >
                  <EditIcon />
                  <span>ویرایش</span>
                </button>
              )}
              {editMode && (
                <div className="flex flex-row flex-nowrap justify-end items-center gap-2">
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <ConfirmIcon />
                    <span>تایید </span>
                  </button>
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#EB5757] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <CancelIcon className="w-[7px] h-1.5 xl:w-2 xl:h-2" />
                    <span>انصراف</span>
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-center items-center">
              <input
                type="text"
                name="family"
                id="family"
                disabled={!editMode}
                className={`w-full h-10 xl:h-[58px] px-3 py-2.5 xl:px-5 xl:py-4  text-xs xl:text-lg text-[#888888] text-light text-right leading-[18px] font-normal border  rounded-[7px] xl:rounded-[10px] focus:outline-none ${
                  editMode ? "border-[#2F80ED]" : "border-[#E3E1E3]"
                }`}
                defaultValue={userInfo.family}
                required
                minLength={3}
                maxLength={20}
              />
            </div>
          </div>
        </div>
        {/* mobile and email */}
        <div className="w-full  flex flex-col lg:flex-row flex-nowrap justify-start items-center gap-5 lg:gap-[31px] xl:gap-[51px] ">
          {/* mobile */}
          <div className="w-full lg:w-1/2 flex flex-col flex-nowrap gap-1">
            <div className="w-full flex flex-row justify-between items-center">
              <label
                htmlFor="mobile"
                id="mobilelbl"
                className="w-1/2 text-[#333333] font-light text-[11px] xl:text-base leading-4 xl:leading-6 text-right "
              >
                شماره موبایل
              </label>
              {!editMode && (
                <button
                  className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                  onClick={editModeHandler}
                >
                  <EditIcon />
                  <span>ویرایش</span>
                </button>
              )}
              {editMode && (
                <div className="flex flex-row flex-nowrap justify-end items-center gap-2">
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <ConfirmIcon />
                    <span>تایید </span>
                  </button>
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#EB5757] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <CancelIcon className="w-[7px] h-1.5 xl:w-2 xl:h-2" />
                    <span>انصراف</span>
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-center items-center">
              <input
                type="tel"
                name="mobile"
                id="mobile"
                pattern="+98[0-9]{3}-[0-9]{3}-[0-9]{4}"
                disabled={!editMode}
                className={`w-full h-10 xl:h-[58px] px-3 py-2.5 xl:px-5 xl:py-4  text-xs xl:text-lg text-[#888888] text-light text-left leading-[18px] font-normal border  rounded-[7px] xl:rounded-[10px] focus:outline-none ${
                  editMode ? "border-[#2F80ED]" : "border-[#E3E1E3]"
                }`}
                defaultValue={userInfo.mobile}
                required
                minLength={11}
                maxLength={11}
              />
            </div>
          </div>
          {/* email */}
          <div className="w-full lg:w-1/2 flex flex-col flex-nowrap gap-1">
            <div className="w-full flex flex-row justify-between items-center">
              <label
                htmlFor="email"
                id="emaillbl"
                className="w-1/2 text-[#333333] font-light text-[11px] xl:text-base leading-4 xl:leading-6 text-right "
              >
                آدرس ایمیل
              </label>
              {!editMode && (
                <button
                  className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                  onClick={editModeHandler}
                >
                  <EditIcon />
                  <span>ویرایش</span>
                </button>
              )}
              {editMode && (
                <div className="flex flex-row flex-nowrap justify-end items-center gap-2">
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <ConfirmIcon />
                    <span>تایید </span>
                  </button>
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#EB5757] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <CancelIcon className="w-[7px] h-1.5 xl:w-2 xl:h-2" />
                    <span>انصراف</span>
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-center items-center">
              <input
                type="email"
                name="email"
                id="email"
                pattern=".+@globex\.com"
                disabled={!editMode}
                className={`w-full h-10 xl:h-[58px]  px-3 py-2.5 xl:px-5 xl:py-4  text-xs xl:text-lg text-[#888888] text-light text-left leading-[18px] font-normal border  rounded-[7px] xl:rounded-[10px] focus:outline-none ${
                  editMode ? "border-[#2F80ED]" : "border-[#E3E1E3]"
                }`}
                defaultValue={userInfo.email}
                required
                minLength={15}
                maxLength={50}
              />
            </div>
          </div>
        </div>
        {/* password and sex */}
        <div className="w-full  flex flex-col lg:flex-row flex-nowrap justify-start items-center gap-5 lg:gap-[31px] xl:gap-[51px] ">
          {/* password */}
          <div className="w-full lg:w-1/2 flex flex-col flex-nowrap gap-1 ">
            <div className="w-full flex flex-row justify-between items-center">
              <label
                htmlFor="password"
                id="passwordlbl"
                className="w-1/2 text-[#333333] font-light text-[11px] xl:text-base leading-4 xl:leading-6 text-right "
              >
                رمز عبور
              </label>
              {!editMode && (
                <button
                  className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                  onClick={editModeHandler}
                >
                  <EditIcon />
                  <span>ویرایش</span>
                </button>
              )}
              {editMode && (
                <div className="flex flex-row flex-nowrap justify-end items-center gap-2">
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <ConfirmIcon />
                    <span>تایید </span>
                  </button>
                  <button
                    className="flex flex-row flex-nowrap justify-end items-center text-[#EB5757] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
                    onClick={editModeHandler}
                  >
                    <CancelIcon className="w-[7px] h-1.5 xl:w-2 xl:h-2" />
                    <span>انصراف</span>
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-center items-center">
              <input
                type="password"
                name="password"
                id="password"
                disabled={!editMode}
                className={`w-full h-10 xl:h-[58px]  px-3 py-2.5 xl:px-5 xl:py-4 text-xs xl:text-lg text-[#888888]  text-light text-left leading-[18px] font-normal border  rounded-[7px] xl:rounded-[10px] focus:outline-none ${
                  editMode ? "border-[#2F80ED]" : "border-[#E3E1E3]"
                }`}
                value={userInfo.password}
                required
                minLength={8}
                maxLength={30}
              />
            </div>
          </div>
          {/* sex */}
          <div className="w-full lg:w-1/2 flex flex-col flex-nowrap gap-1 my-5 lg:my-0 ">
            <div className="w-full flex flex-row justify-between items-center ">
              <label
                htmlFor=""
                id="sexlbl"
                className="w-1/2 text-[#333333] font-light text-[11px] xl:text-base leading-4 xl:leading-6 text-right "
              >
                تعیین جنسیت
              </label>
            </div>
            <div className="w-full flex flex-row justify-start items-center gap-2 py-5 lg:py-3 ">
              <label
                htmlFor="male"
                id="malechk"
                className="relative  flex flex-row flex-nowrap gap-2 justify-center items-center  text-[#888888] font-light text-[8px] xl:text-xs leading-3 text-right "
              >
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  disabled={!editMode}
                  value="male"
                  checked={isMale}
                  onClick={sexHandler}
                  className={`appearance-none rounded-sm w-3 h-3 xl:w-4 xl:h-4 focus:outline-none border  ${
                    isMale
                      ? "bg-[#2F80ED] border-[#2F80ED]"
                      : "bg-white border-abiStroke"
                  } text-white focus:ring-[#2F80ED] focus:ring-1 `}
                />
                مرد
                <span className=" absolute h-full top-[3px] left-5 xl:left-6   ">
                  {isMale && (
                    <svg
                      className="w-[7px] h-[5px] xl:w-3 xl:h-2.5"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.20569 6.20947L3.70569 8.70947L10.3724 1.20947"
                        stroke="white"
                        stroke-linecap="square"
                      />
                    </svg>
                  )}
                </span>
              </label>
              <label
                htmlFor="female"
                id="femalechk"
                className="relative  flex flex-row flex-nowrap gap-2 justify-center items-center  text-[#888888] font-light text-[8px] xl:text-xs  before:leading-3 text-right "
              >
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  disabled={!editMode}
                  checked={!isMale}
                  value="female"
                  onClick={sexHandler}
                  className={`appearance-none rounded-sm w-3 h-3 xl:w-4 xl:h-4 focus:outline-none border  ${
                    !isMale
                      ? "bg-[#2F80ED] border-[#2F80ED]"
                      : "bg-white border-abiStroke"
                  } text-white focus:ring-[#2F80ED] focus:ring-1 `}
                />{" "}
                زن
                <span className=" absolute h-full top-[3px] left-5 xl:left-6 ">
                  {!isMale && (
                    <svg
                      className="w-[7px] h-[5px] xl:w-3 xl:h-2.5"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.20569 6.20947L3.70569 8.70947L10.3724 1.20947"
                        stroke="white"
                        stroke-linecap="square"
                      />
                    </svg>
                  )}
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* buttons */}
        {editMode && (
          <div className="w-full flex flex-row flex-nowrap justify-end items-center gap-2 xl:gap-3 lg:mt-[100px] lg:mb-[60px]">
            <button
              type="submit"
              className="flex flex-row justify-center items-center text-white bg-[#2F80ED] font-normal text-xs xl:text-lg leading-[18px] text-center rounded-[7px] xl:rounded-[10px] w-[102px] h-[38px] xl:w-[156px] xl:h-[58px]"
            >
              تایید
            </button>
            <button
              type="button"
              onClick={editModeHandler}
              className="flex flex-row justify-center items-center text-white bg-[#EB5757] font-normal text-xs xl:text-lg leading-[18px] text-center rounded-[7px] xl:rounded-[10px] w-[102px] h-[38px] xl:w-[156px] xl:h-[58px]"
            >
              انصراف
            </button>
          </div>
        )}
      </form>

      <div className="w-full flex flex-row flex-nowrap "></div>
    </div>
  );
};

export default ProfileContent;
