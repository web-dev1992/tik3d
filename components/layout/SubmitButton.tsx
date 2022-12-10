const SubmitButton: React.FC<{
  //   type?: "submit" | "button" | "reset";
  className?: string;
  text?: string;
}> = ({
  //   type = "submit",
  className = "w-full h-[34px] lg:h-9 xl:h-[58px] rounded-[2px] lg:rounded font-bold text-center bg-abi text-white text-xxs xl:text-base",
  text = "تایید",
}) => {
  return (
    <button type="submit" className={className}>
      {text}
    </button>
  );
};

export default SubmitButton;
