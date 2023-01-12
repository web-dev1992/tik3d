/* eslint-disable react/display-name */
import React, { FormEvent, forwardRef } from "react";
import InputLayout from "../profile/InputLayout";
import ProfileLabel from "../profile/ProfileLabel";

const FamilyInput: React.FC<{
  lastName: string;
  handleChange: (event: FormEvent) => void;
  error: string;
  editMode: boolean;
  editModeHandler: () => void;
  ref: React.Ref<HTMLInputElement>;
}> = forwardRef(
  ({ lastName, handleChange, error, editMode, editModeHandler }, ref) => {
    return (
      <InputLayout>
        <ProfileLabel
          props={{
            labelText: "نام خانوادگی",
            id: "lastNamelbl",
            htmlFor: "lastName",
            editMode: editMode,
            editModeHandler: editModeHandler,
          }}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          disabled={!editMode}
          onChange={handleChange}
          className={` ${
            editMode
              ? "ProfileContentInputEditMode"
              : "ProfileContentInputNotEditMode"
          }`}
          defaultValue={lastName}
          required
          minLength={3}
          maxLength={20}
          ref={ref}
        />
      </InputLayout>
    );
  }
);

export default FamilyInput;
