import MainHeader from "@components/layout/MainHeader";

const MainLayout = (props) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center max-w-[1920px] m-auto ">
      <MainHeader />
      {props.children}
    </div>
  );
};

export default MainLayout;
