const CardLayout = (props) => {
  return (
    <div className="bg-white font-IRANSans rounded-md shadow-[0_4px_7px_rgba(0,0,0,0.1)]  p-2 w-[100px]  xl:w-40 h-36  xl:h-56 flex flex-col flex-nowrap justify-center items-center gap-2 relative">
      {props.children}
    </div>
  );
};

export default CardLayout;
