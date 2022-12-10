const ErrorMessage: React.FC<{ message }> = ({ message }) => {
  return (
    <span className="w-full text-[#EB5757] text-[7px] xl:text-xs xl:leading-3 font-normal leading-[8px] text-right ">
      {message}
    </span>
  );
};

export default ErrorMessage;
