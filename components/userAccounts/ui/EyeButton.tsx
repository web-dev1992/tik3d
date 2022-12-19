import PasswordEyeIcon from "@components/ui/PasswordEyeIcon";

const EyeButton: React.FC<{ PasswordInputTypeHandler: () => void }> = ({
  PasswordInputTypeHandler,
}) => {
  return (
    <button
      className="absolute top-3 right-2 xl:top-[22px] xl:right-[11px] w-[9px] h-[9px] xl:w-4 xl:h-4 "
      onClick={() => {
        PasswordInputTypeHandler();
      }}
      type="button"
    >
      <PasswordEyeIcon />
    </button>
  );
};

export default EyeButton;
