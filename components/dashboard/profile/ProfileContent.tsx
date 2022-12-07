import { useState } from "react";
import ContentTitle from "../ContentTitle";
import TikSvg from "@components/dashboard/profile/TikSvg";
import Row from "@components/dashboard/profile/Row";
import InputLayout from "@components/dashboard/profile/InputLayout";
import ProfileLabel from "./ProfileLabel";
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
    <div className="w-full  flex flex-col flex-nowrap justify-center items-center  ">
      <ContentTitle title="اطلاعات کاربری" />
      <form
        onSubmit={changeInfoHandler}
        className="w-full flex flex-col flex-nowrap justify-center items-center gap-5 xl:gap-[30px]"
      >
        {/* name and family */}
        <Row>
          {/* name */}
          <InputLayout>
            <ProfileLabel
              props={{
                labelText: "نام",
                htmlFor: "uname",
                id: "namelbl",
                editMode: editMode,
                editModeHandler: editModeHandler,
              }}
            />
            <input
              type="text"
              name="uname"
              id="uname"
              disabled={!editMode}
              className={` ${
                editMode
                  ? "ProfileContentInputEditMode"
                  : "ProfileContentInputNotEditMode"
              }`}
              defaultValue={userInfo.name}
              required
              minLength={3}
              maxLength={20}
            />
          </InputLayout>
          {/* family */}
          <InputLayout>
            <ProfileLabel
              props={{
                labelText: "نام خانوادگی",
                id: "familylbl",
                htmlFor: "family",
                editMode: editMode,
                editModeHandler: editModeHandler,
              }}
            />
            <input
              type="text"
              name="family"
              id="family"
              disabled={!editMode}
              className={` ${
                editMode
                  ? "ProfileContentInputEditMode"
                  : "ProfileContentInputNotEditMode"
              }`}
              defaultValue={userInfo.family}
              required
              minLength={3}
              maxLength={20}
            />
          </InputLayout>
        </Row>
        {/* mobile and email */}
        <Row>
          {/* mobile */}
          <InputLayout>
            <ProfileLabel
              props={{
                labelText: "شماره موبایل",
                htmlFor: "mobile",
                id: "mobilelbl",
                editMode: editMode,
                editModeHandler: editModeHandler,
              }}
            />
            <input
              type="tel"
              name="mobile"
              id="mobile"
              pattern="+98[0-9]{3}-[0-9]{3}-[0-9]{4}"
              disabled={!editMode}
              className={` ${
                editMode
                  ? "ProfileContentInputEditMode"
                  : "ProfileContentInputNotEditMode"
              }`}
              defaultValue={userInfo.mobile}
              required
              minLength={11}
              maxLength={11}
            />
          </InputLayout>
          {/* email */}
          <InputLayout>
            <ProfileLabel
              props={{
                labelText: "آدرس ایمیل",
                htmlFor: "email",
                id: "emaillbl",
                editMode: editMode,
                editModeHandler: editModeHandler,
              }}
            />
            <input
              type="email"
              name="email"
              id="email"
              pattern=".+@globex\.com"
              disabled={!editMode}
              className={` ${
                editMode
                  ? "ProfileContentInputEditMode"
                  : "ProfileContentInputNotEditMode"
              }`}
              defaultValue={userInfo.email}
              required
              minLength={15}
              maxLength={50}
            />
          </InputLayout>
        </Row>
        {/* password and sex */}
        <Row>
          {/* password */}
          <InputLayout>
            <ProfileLabel
              props={{
                labelText: "رمز عبور",
                htmlFor: "password",
                id: "passwordlbl",
                editMode: editMode,
                editModeHandler: editModeHandler,
              }}
            />
            <input
              type="password"
              name="password"
              id="password"
              disabled={!editMode}
              className={` ${
                editMode
                  ? "ProfileContentInputEditMode"
                  : "ProfileContentInputNotEditMode"
              }`}
              value={userInfo.password}
              required
              minLength={8}
              maxLength={30}
            />
          </InputLayout>
          {/* sex */}
          <InputLayout>
            <div className="w-full flex flex-row justify-between items-center ">
              <label htmlFor="" id="sexlbl" className="ProfileContentLabel">
                تعیین جنسیت
              </label>
            </div>
            <div className="w-full flex flex-row justify-start items-center gap-2 py-5 lg:py-3 ">
              <label
                htmlFor="male"
                id="malechk"
                className="relative flex flex-row flex-nowrap gap-2 justify-center items-center  text-[#888888] font-light text-[8px] xl:text-xs leading-3 text-right "
              >
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  disabled={!editMode}
                  value="male"
                  checked={isMale}
                  onClick={sexHandler}
                  className={`ProfileCheckBox ${
                    isMale
                      ? "bg-[#2F80ED] border-[#2F80ED]"
                      : "bg-white border-abiStroke"
                  } `}
                />
                مرد
                <span className="absolute h-full top-[3px] left-5 lg:left-[22px] xl:left-7   ">
                  {isMale && <TikSvg />}
                </span>
              </label>
              <label
                htmlFor="female"
                id="femalechk"
                className="relative flex flex-row flex-nowrap gap-2 justify-center items-center  text-[#888888] font-light text-[8px] xl:text-xs  before:leading-3 text-right "
              >
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  disabled={!editMode}
                  checked={!isMale}
                  value="female"
                  onClick={sexHandler}
                  className={`ProfileCheckBox ${
                    !isMale
                      ? "bg-[#2F80ED] border-[#2F80ED]"
                      : "bg-white border-abiStroke"
                  }  `}
                />
                زن
                <span className=" absolute h-full top-[3px] left-5 lg:left-[18px] xl:left-[22px] ">
                  {!isMale && <TikSvg />}
                </span>
              </label>
            </div>
          </InputLayout>
        </Row>
        {/* buttons */}
        {editMode && (
          <div className="w-full flex flex-row flex-nowrap justify-end items-center gap-2 xl:gap-3 lg:mt-[100px] lg:mb-[60px]">
            <button type="submit" className="bg-[#2F80ED] ProfileFormButton">
              تایید
            </button>
            <button
              type="button"
              onClick={editModeHandler}
              className="bg-[#EB5757] ProfileFormButton"
            >
              انصراف
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileContent;
