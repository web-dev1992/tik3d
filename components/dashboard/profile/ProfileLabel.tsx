import EditButton from "@components/dashboard/profile/EditButton";
import ConfirmOrRejectButton from "@components/dashboard/profile/ConfirmOrRejectButton";

interface LabelProps {
  labelText: string;
  id: string;
  htmlFor: string;
  editMode: boolean;
  editModeHandler: () => void;
}

const ProfileLabel: React.FC<{ props: LabelProps }> = ({ props }) => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <label
        htmlFor={props.htmlFor}
        id={props.id}
        className="ProfileContentLabel"
      >
        {props.labelText}
      </label>
      {!props.editMode && (
        <EditButton editModeHandler={props.editModeHandler} />
      )}
      {props.editMode && (
        <ConfirmOrRejectButton editModeHandler={props.editModeHandler} />
      )}
    </div>
  );
};

export default ProfileLabel;
