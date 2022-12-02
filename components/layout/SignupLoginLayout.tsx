import SignupLoginHeader from "./SignupLoginHeader";

const SignupLoginLayout = (props) => {
  return (
    <div className="relative w-full h-full bg-[#F6F8FB] flex flex-col flex-nowrap justify-center items-center">
      <SignupLoginHeader />
      <div className="w-[327px] lg:w-[351px] xl:w-[566px] flex flex-col flex-nowrap justify-center items-center  bg-white   rounded-[5px] xl:rounded-lg mb-[218px] lg:mb-40 xl:mb-64 mt-32">
        {props.children}
      </div>
    </div>
  );
};

export default SignupLoginLayout;
