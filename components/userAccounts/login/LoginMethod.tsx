import MethodButton from "../ui/MethodButton";
const LoginMethod: React.FC<{
  loginMethod: string;
  changeLoginMethodhandler: (state: string) => void;
}> = ({ loginMethod, changeLoginMethodhandler }) => {
   const constclass =
    "rounded-sm xl:rounded-md h-6 w-14 xl:w-[101px] xl:h-11 xl:text-sm font-normal text-[8px] text-center leading-3";
  const activeClass =
    "  text-[#333333] border-none bg-[linear-gradient(360deg,#E0E0E0_0%,#F2F2F2_109%)]";
  const deactiveClass = "  border border-[#E0E0E0] text-[#828282] bg-white";
  return (
    <div className="flex flex-row flex-nowrap justify-center items-center gap-1.5 xl:gap-3 xl:mt-6 ">
      <MethodButton
        text="تلفن"
        method="phone"
        changeMethodhandler={changeLoginMethodhandler}
        className={
          loginMethod === "phone"
            ? constclass + activeClass
            : constclass + deactiveClass
        }
      />
      <MethodButton
        text="ایمیل"
        method="email"
        changeMethodhandler={changeLoginMethodhandler}
        className={
          loginMethod === "email"
            ? constclass + activeClass
            : constclass + deactiveClass
        }
      />
    </div>
  );
};
export default LoginMethod;
