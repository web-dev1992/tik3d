import MainHeader from "@components/layout/MainHeader";

const MainLayout = (props) => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-center items-center">
      <MainHeader />
      {props.children}
    </div>
  );
};

export default MainLayout;
