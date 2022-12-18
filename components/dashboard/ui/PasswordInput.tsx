import React, { FormEvent, forwardRef } from "react";

import InputLayout from "../profile/InputLayout";
import ProfileLabel from "../profile/ProfileLabel";


const PasswordInput: React.FC<{
    password: string;
    handleChange: (event: FormEvent) => void;
    error: string;
    editMode: boolean;
    editModeHandler: () => void;
    ref: React.Ref<HTMLInputElement>;
  }> = forwardRef(
    ({ password, handleChange, error, editMode, editModeHandler }, ref) => {
    return (  <InputLayout>
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
          onChange={handleChange}
          className={` ${
            editMode
              ? "ProfileContentInputEditMode"
              : "ProfileContentInputNotEditMode"
          }`}
          required
          minLength={8}
          maxLength={30}
          ref={ref}
        />
      </InputLayout> );
});
 
export default PasswordInput;