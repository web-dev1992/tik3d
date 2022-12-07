const InputLayout = (props) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col flex-nowrap gap-1 ">
      {props.children}
    </div>
  );
};

export default InputLayout;
