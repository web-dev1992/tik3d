import React, { FormEvent, forwardRef } from "react";
import InputLayout from "../profile/InputLayout";
import ProfileLabel from "../profile/ProfileLabel";

const EmailInput: React.FC<{
  email: string;
  handleChange: (event: FormEvent) => void;
  error: string;
  editMode: boolean;
  editModeHandler: () => void;
  disabled:boolean;
  ref: React.Ref<HTMLInputElement>;
}> = forwardRef(
  ({ email, handleChange, error, editMode, editModeHandler,disabled }, ref) => {
    return (
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
          disabled={disabled}
          onChange={handleChange}
          className={` ${
            editMode
              ? "ProfileContentInputEditMode"
              : "ProfileContentInputNotEditMode"
          }`}
          defaultValue={email}
          required
          minLength={15}
          maxLength={50}
          ref={ref}
        />
      </InputLayout>
    );
  }
);

export default EmailInput;
