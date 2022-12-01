import DropDown from "@components/ui/Dropdown";
interface Props{
    mainClassName:string,
    dropdownClassName:string
}
const Search:React.FC<Props> = (props:Props) => {
    
  return (
    <div className={props.mainClassName}>
      {/* <div className="w-24 h-8 bg-[#F2F2F2] relative "> */}
      <div className={props.dropdownClassName}>
        <DropDown
          className="w-full h-full text-[9px] font-semibold  xl:text-sm xl:font-bold relative"
          selectItems={["همه آیتم ها", "ویدئوها", "موزیک ها"]}
        />
      </div>
      <div className="w-full h-full relative  rounded-l-md overflow-hidden ">
        <input
          type="text"
          name="searchBox"
          placeholder="جستجو..."
          className="w-full h-full text-[11px] leading-4 border rounded-l-md pr-2 pl-12 border-stone-200 text-[#888888] xl:text-lg"
        />
        <button className="bg-[#2F80ED] absolute top-0 left-0 w-[34px] xl:w-12  h-full flex justify-center items-center ">
          <svg
            className="h-5 w-5 xl:h-8 xl:w-8"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="11.9847"
              transform="matrix(-1 0 0 1 16.811 15.689)"
              stroke="#F2F2F2"
              strokeWidth="2.00785"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.47498 24.6472L3.77627 29.3337"
              stroke="#F2F2F2"
              strokeWidth="2.00785"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
