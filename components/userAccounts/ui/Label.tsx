const Label: React.FC<{ label; htmlFor: string; id: string }> = ({
  label,
  htmlFor,
  id,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      id={id}
      className="text-[#333333] text-right text-[7px] xl:text-xs leading-[10px] xl:leading-[18xpx] font-noraml"
    >
      {label}
    </label>
  );
};

export default Label;
