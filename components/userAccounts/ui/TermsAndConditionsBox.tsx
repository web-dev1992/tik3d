const TermsAndConditionsBox: React.FC<{
  acceptLawHandler: () => void;
  acceptLaw: boolean;
  acceptLawError: String;
  openConditionsHandler: () => void;
}> = ({
  acceptLawHandler,
  acceptLaw = false,
  acceptLawError = "",
  openConditionsHandler,
}) => {
  return (
    <div className="w-full flex flex-row gap-1 text-[7px] xl:text-xs font-light justify-start items-center">
      <label
        htmlFor="accept-law"
        id="accept-alw-lbl"
        className="inline-flex items-center gap-1 relative text-[#333333]"
      >
        <input
          type="checkbox"
          name="accept-law"
          id="accept-law"
          value="true"
          onChange={acceptLawHandler}
          required
          className={`appearance-none outline-none rounded-[2px] xl:rounded-[3px] w-2.5 h-2.5 xl:w-[17px] xl:h-[17px] ${
            acceptLaw
              ? "bg-[#4F96FF] border-none"
              : acceptLawError
              ? "bg-white border border-[#EB5757]"
              : "bg-white border border-abiStroke "
          }`}
        />
        <span className=" absolute h-full top-[2px] right-[2px] xl:left-6   ">
          {acceptLaw && (
            <svg
              className="w-[7px] h-[5px] xl:w-3 xl:h-2.5  "
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.20569 6.20947L3.70569 8.70947L10.3724 1.20947"
                stroke="white"
                strokeLinecap="square"
              />
            </svg>
          )}
        </span>
        قوانین و مقررات Tik3d را می پذیرم.
      </label>
      <button
        className="text-[#2D9CDB] text-[7px] xl:text-xs font-light leading-[10px]"
        onClick={openConditionsHandler}
      >
        مشاهده قوانین
      </button>
    </div>
  );
};

export default TermsAndConditionsBox;
