import React, { FormEvent, forwardRef } from "react";
import InputLayout from "../profile/InputLayout";
import ProfileLabel from "../profile/ProfileLabel";

const NameInput: React.FC<{
  firstName: string;
  handleChange: (event: FormEvent) => void;
  error: string;
  editMode: boolean;
  editModeHandler: () => void;
  ref: React.Ref<HTMLInputElement>;
}> = forwardRef(
  ({ firstName, handleChange, error, editMode, editModeHandler }, ref) => {
    return (
      <InputLayout>
        <ProfileLabel
          props={{
            labelText: "نام",
            htmlFor: "firstName",
            id: "firstNamelbl",
            editMode: editMode,
            editModeHandler: editModeHandler,
          }}
        />
        <input
          type="text"
          name="firstName"
          id="firstName"
          disabled={!editMode}
          onChange={handleChange}
          className={` ${
            editMode
              ? "ProfileContentInputEditMode"
              : "ProfileContentInputNotEditMode"
          }`}
          defaultValue={firstName}
          required
          minLength={3}
          maxLength={20}
          ref={ref}
        />
      </InputLayout>
    );
  }
);

export default NameInput;
