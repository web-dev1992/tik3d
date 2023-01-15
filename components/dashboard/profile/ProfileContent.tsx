import { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
    const newUserInfo = {
      firstName: firstNameRef.current?.value ?? "",
      lastName: lastNameRef.current?.value ?? "",
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      gender: isMale,
    };

    try {
      const response = await axios.post("/api/user/edit-user", newUserInfo);
      Swal.fire({
        title: "تبریک",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "فهمیدم!",
      });

      setEditMode((prev) => !prev);
      changeLodedUserHandler(newUserInfo);
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: error.response.data.message || "خطایی بوجود آمده است!",
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });
    } finally {
      setIsLoading(false);
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
            <button
              type="submit"
              className="bg-[#2F80ED] ProfileFormButton"
              disabled={isLoading}
            >
              {isLoading && (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>در حال ثبت ...</span>
                </>
              )}
              {!isLoading && <span>تایید</span>}
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
