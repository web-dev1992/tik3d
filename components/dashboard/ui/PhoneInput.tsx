/* eslint-disable react/display-name */
import React, { FormEvent, forwardRef } from "react";
import InputLayout from "../profile/InputLayout";
import ProfileLabel from "../profile/ProfileLabel";

const PhoneInput: React.FC<{
  phone: number;
  handleChange: (event: FormEvent) => void;
  error: string;
  editMode: boolean;
  editModeHandler: () => void;
  disabled: boolean;
  ref: React.Ref<HTMLInputElement>;
}> = forwardRef(
  (
    { phone, handleChange, error, editMode, editModeHandler, disabled },
    ref
  ) => {
    return (
      <InputLayout>
        <ProfileLabel
          props={{
            labelText: "شماره موبایل",
            htmlFor: "phone",
            id: "phonelbl",
            editMode: editMode,
            editModeHandler: editModeHandler,
          }}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          disabled={disabled}
          onChange={handleChange}
          className={` ${
            editMode
              ? "ProfileContentInputEditMode"
              : "ProfileContentInputNotEditMode"
          }`}
          defaultValue={phone}
          required
          minLength={11}
          maxLength={11}
          ref={ref}
        />
      </InputLayout>
    );
  }
);

export default PhoneInput;
