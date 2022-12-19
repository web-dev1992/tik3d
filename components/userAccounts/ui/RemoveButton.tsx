import RemoveIcon from "@components/ui/RemoveIcon";

const RemoveButton: React.FC<{
  removeValueHandler: (name: string) => void;
  name: string;
  className?: string;
}> = ({
  removeValueHandler,
  name,
  className = "absolute top-3 right-1.5 xl:top-5 xl:right-3 w-2.5 h-2.5 xl:w-5 xl:h-5",
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={removeValueHandler.bind(null, name)}
    >
      <RemoveIcon />
    </button>
  );
};

export default RemoveButton;
