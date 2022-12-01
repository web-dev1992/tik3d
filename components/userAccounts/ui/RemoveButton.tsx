import RemoveIcon from "@components/ui/RemoveIcon";

const RemoveButton: React.FC<{ removeValueHandler; name, className?:string }> = ({
  removeValueHandler,
  name,
  className="absolute top-3 right-1.5 xl:top-5 xl:right-3"
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
