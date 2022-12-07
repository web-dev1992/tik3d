const Row = (props) => {
  return (
    <div className="w-full flex flex-col lg:flex-row flex-nowrap justify-start items-center gap-5 lg:gap-[31px] xl:gap-[51px] ">
      {props.children}
    </div>
  );
};

export default Row;
