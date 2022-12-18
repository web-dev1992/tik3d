import React, { useState } from "react";
import { omit } from "lodash";
interface formValues {
  username?: string;
  firstName?: string;
  lastName?: string;
  phone?: number;
  password?: string;
  email?: string;
  countryCode?: number;
}
interface formErrors {
  username?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  password?: string;
  email?: string;
  countryCode?: string;
}

const countryCode = [
  {
    country: "Iran",
    code: "098",
    flag: (
      <svg
        className="w-3 h-3 xl:w-5 xl:h-5 rounded-full"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-7.5 13.4292H27.4987V20.0008H-7.5V13.4292Z"
          fill="#DA0000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-7.5 0H27.4987V6.57157H-7.5V0Z"
          fill="#239F40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9246 7.71655C11.2593 8.11972 12.2752 10.3573 10.3118 11.8248C9.38858 12.5182 9.96107 12.5505 9.98929 12.6714C11.4729 11.8812 11.9567 10.8169 11.9446 9.85735C11.9325 8.90185 11.4286 8.05924 10.9287 7.71655H10.9246Z"
          fill="#DA0000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1261 7.61157C11.4873 7.83281 11.7949 8.13145 12.0267 8.48597C12.2585 8.84048 12.4088 9.24203 12.4667 9.66165C12.5245 10.0813 12.4885 10.5085 12.3613 10.9125C12.234 11.3165 12.0187 11.6873 11.7308 11.998C12.7952 11.7642 14.1498 8.62351 11.118 7.61157H11.1261ZM8.87237 7.61157C8.51115 7.83281 8.20353 8.13145 7.9717 8.48597C7.73987 8.84048 7.58961 9.24203 7.53176 9.66165C7.47391 10.0813 7.50991 10.5085 7.63716 10.9125C7.76441 11.3165 7.97974 11.6873 8.26762 11.998C7.19924 11.7642 5.8446 8.62351 8.87237 7.61157Z"
          fill="#DA0000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.07003 7.71655C8.73943 8.11972 7.71943 10.3573 9.68283 11.8248C10.6061 12.5182 10.0336 12.5505 10.0054 12.6714C8.52576 11.8812 8.03793 10.8169 8.05002 9.85735C8.06212 8.90185 8.5701 8.05924 9.07003 7.71655Z"
          fill="#DA0000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.88 12.4656C11.242 12.4903 10.6071 12.3661 10.0255 12.1028C10.1142 12.2762 10.1867 12.385 10.2794 12.5624C10.7955 12.6068 11.5091 12.6672 11.88 12.4656ZM8.1709 12.4656C8.75146 12.4737 9.48522 12.385 10.0255 12.1028C9.93676 12.2762 9.86419 12.385 9.77146 12.5624C9.25541 12.6068 8.54181 12.6672 8.1709 12.4656ZM9.23525 7.04712C9.3562 7.35756 9.66261 7.40594 9.9932 7.22048C10.2351 7.36562 10.606 7.37368 10.735 7.05921C10.8318 7.83329 10.0174 7.65187 9.98917 7.5027C9.6868 7.79297 9.12237 7.62364 9.23525 7.04712Z"
          fill="#DA0000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0137 12.9538L10.3201 12.603L10.3605 7.91018L9.99762 7.58765L9.63477 7.89405L9.70734 12.6191L10.0137 12.9538Z"
          fill="#DA0000"
        />
      </svg>
    ),
  },
];
const useFormValidation = (submitFormHandler, itemCount) => {
  const [values, setValues] = useState<formValues>({});
  const [errors, setErrors] = useState<formErrors>({});
  const [flag, setFlag] = useState(null);
  const [hasNumber, setHasNumber] = useState<boolean>(false);
  const [hasCapital, setHasCapital] = useState<boolean>(false);
  const [hasSpecial, setHasSpecial] = useState<boolean>(false);
  const [trueLength, setTrueLength] = useState<boolean>(false);

  const validate = (name, value) => {
    switch (name) {
      case "username":
        if (value.length <= 8 || value.length === 0) {
          setErrors({
            ...errors,
            username: "نام کاربری حداقل باید 8 کاراکتر باشد!",
          });
        } else {
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;
      case "firstName":
        if (value.length <= 3 || value.length === 0 || value.length > 20) {
          setErrors({
            ...errors,
            firstName: "نام حداقل باید 3 کاراکتر و حداکثر 20 کاراکتر باشد!",
          });
        } else {
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;
      case "lastName":
        if (value.length <= 3 || value.length === 0 || value.length > 20) {
          setErrors({
            ...errors,
            lastName:
              "نام خانوادگی حداقل باید 3 کاراکتر و حداکثر 20 کاراکتر باشد!",
          });
        } else {
          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value) ||
          value.length === 0
        ) {
          setErrors({
            ...errors,
            email: "لطفا یک ایمیل معتبر وارد نمایید!",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "phone":
        if (
          !new RegExp(/(09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4})$/).test(
            value
          ) ||
          value.length === 0
        ) {
          setErrors({
            ...errors,
            phone: "لطفا یک شماره تلفن معتبر وارد نمایید!",
          });
        } else {
          let newObj = omit(errors, "phone");
          setErrors(newObj);
        }
        break;
      case "password":
        if (
          !new RegExp(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[!@#$%^&*])(?=.*?[0-9]).{8,}$/
          ).test(value) ||
          value.length < 8
        ) {
          setErrors({
            ...errors,
            password:
              "رمز عبور باید حداقل شامل ۸ کاراکتر ،۱ حرف بزرگ و ۱ کاراکتر خاص باشد!",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        value.length < 8 ? setTrueLength(false) : setTrueLength(true);
        new RegExp(/\d/).test(value) ? setHasNumber(true) : setHasNumber(false);
        new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(value)
          ? setHasSpecial(true)
          : setHasSpecial(false);
        new RegExp(/[A-Z]/).test(value)
          ? setHasCapital(true)
          : setHasCapital(false);
        break;
      case "countryCode":
        const code = countryCode.findIndex((item) => item.code == value);
        if (code === -1) {
          setErrors({
            ...errors,
            countryCode: "کد معتبر وارد نمایید!",
          });
          setFlag(null);
        } else {
          let newObj = omit(errors, "countryCode");
          setErrors(newObj);
          setFlag(countryCode[code].flag);
        }
        break;
    }
  };

  const removeValueHandler = (inputName: string) => {
    let name = inputName;

    let newObj = {};
    switch (name) {
      case "username":
        newObj = omit(values, "username");
        setValues(newObj);
        break;
      case "firstName":
        newObj = omit(values, "firstName");
        setValues(newObj);
        break;
      case "lastName":
        newObj = omit(values, "lastName");
        setValues(newObj);
        break;
      case "password":
        newObj = omit(values, "password");
        setValues(newObj);
        break;
      case "email":
        newObj = omit(values, "email");
        setValues(newObj);
        break;
      case "phone":
        newObj = omit(values, "phone");
        setValues(newObj);
        break;
      case "countryCode":
        newObj = omit(values, "countryCode");
        setValues(newObj);
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();
    console.log("handle change function was invoked!");
    let name = event.target.name;
    let val = event.target.value;

    validate(name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (
      Object.keys(errors).length === 0 &&
      Object.keys(values).length === itemCount
    ) {
      submitFormHandler();
    } else {
      let ErrorMessage = "";
      for (let key in errors) {
        ErrorMessage += `${errors[key]}\n`;
      }
      alert(`خطایی در اطلاعات وارد شده وجود دارد!\n ${ErrorMessage}`);
    }
  };

  return {
    values,
    errors,
    flag,
    handleChange,
    handleSubmit,
    removeValueHandler,
    verify: { trueLength, hasNumber, hasSpecial },
  };
};

export default useFormValidation;
