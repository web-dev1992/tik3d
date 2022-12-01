const ErrorMessage: React.FC<{ message }> = ({ message }) => {
  return (
    <span className="text-[#EB5757] text-[7px] xl:text-xs xl:leading-3 fonr-normal leading-[8px] text-right ">
      {message}
    </span>
  );
};

export default ErrorMessage;
