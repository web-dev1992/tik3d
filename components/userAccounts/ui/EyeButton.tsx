import PasswordEyeIcon from "@components/ui/PasswordEyeIcon";

const EyeButton: React.FC<{ PasswordInputTypeHandler: () => void }> = ({
  PasswordInputTypeHandler,
}) => {
  return (
    <button
      onClick={() => {
        PasswordInputTypeHandler();
      }}
    >
      <PasswordEyeIcon />
    </button>
  );
};

export default EyeButton;
