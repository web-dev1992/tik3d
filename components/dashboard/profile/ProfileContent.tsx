import { useState, useRef, FormEvent } from "react";
import axios from "axios";
import ContentTitle from "../ui/ContentTitle";
import TikSvg from "@components/dashboard/profile/TikSvg";
import Row from "@components/dashboard/profile/Row";
import InputLayout from "@components/dashboard/profile/InputLayout";
import useFormValidation from "hooks/useFormValidation";
import EmailInput from "../ui/EmailInput";
import PasswordInput from "../ui/PasswordInput";
import PhoneInput from "../ui/PhoneInput";
import FirstNameInput from "../ui/FirstNameInput";
import LastNameInput from "../ui/LastNameInput";
import { ObjectId } from "mongodb";
interface userInfoProps {
  email: string;
  lastName: string;
  image: string;
  isActive: boolean;
  isSpecialUser: boolean;
  firstName: string;
  password: string;
  phone: number;
  gender: boolean;
  _id: ObjectId;
}

const ProfileContent: React.FC<{
  userInfo: userInfoProps;
  changeLodedUserHandler: (newUserInfo) => void;
}> = ({ userInfo, changeLodedUserHandler }) => {
  const [editMode, setEditMode] = useState(false);
  const [isMale, setIsMale] = useState<boolean>(!!userInfo.gender);
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const editModeHandler = () => {
    setEditMode((prev) => !prev);
  };
  const genderHandler = () => {
    setIsMale((prev) => !prev);
  };
  const changeInfoHandler = async () => {
    const newUserInfo = {
      firstName: firstNameRef.current?.value ?? "",
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      gender: isMale,
    };

    try {
      const response = await axios.post("/api/user/edit-user", newUserInfo);
      alert(response.data.message);
      setEditMode((prev) => !prev);
      changeLodedUserHandler(newUserInfo);
    } catch (error) {
      alert(error.response.data.message || "خطایی بوجود آمده است!");
    }
  };
  const { values, errors, verify, handleChange, handleSubmit } =
    useFormValidation(changeInfoHandler);
  return (
    <div className="w-full  flex flex-col flex-nowrap justify-center items-center  ">
      <ContentTitle title="اطلاعات کاربری" />
      <form
        noValidate
        onSubmit={handleSubmit}
        className="w-full flex flex-col flex-nowrap justify-center items-center gap-5 xl:gap-[30px]"
      >
        {/* name and family */}
        <Row>
          <FirstNameInput
            editMode={editMode}
            handleChange={handleChange}
            error={errors.firstName}
            firstName={values.firstName ?? userInfo.firstName}
            editModeHandler={editModeHandler}
            ref={firstNameRef}
          />
          <LastNameInput
            editMode={editMode}
            handleChange={handleChange}
            error={errors.lastName}
            lastName={values.lastName ?? userInfo.lastName}
            editModeHandler={editModeHandler}
            ref={lastNameRef}
          />
        </Row>
        {/* mobile and email */}
        <Row>
          <PhoneInput
            editMode={editMode}
            handleChange={handleChange}
            error={errors.phone}
            phone={values.phone ?? userInfo.phone}
            editModeHandler={editModeHandler}
            ref={phoneRef}
            disabled={!(editMode && !userInfo.phone)}
            // disabled={!editMode}
          />
          <EmailInput
            editMode={editMode}
            handleChange={handleChange}
            error={errors.email}
            email={values.email ?? userInfo.email}
            editModeHandler={editModeHandler}
            disabled={!(editMode && !userInfo.email)}
            // disabled={!editMode}
            ref={emailRef}
          />
        </Row>
        {/* password and sex */}
        <Row>
          <PasswordInput
            editMode={editMode}
            handleChange={handleChange}
            error={errors.password}
            password={values.password ?? userInfo.password}
            editModeHandler={editModeHandler}
            ref={passwordRef}
          />
          {/* gender */}
          <InputLayout>
            <div className="w-full flex flex-row justify-between items-center ">
              <label htmlFor="" id="genderlbl" className="ProfileContentLabel">
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
                  name="gender"
                  disabled={!editMode}
                  value="male"
                  checked={isMale}
                  onClick={genderHandler}
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
                  name="gender"
                  disabled={!editMode}
                  checked={!isMale}
                  value="female"
                  onClick={genderHandler}
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
