const FormTitle = (props) => {
  return (
    <h1 className=" w-full text-center text-[#0F2137] text-[14px] xl:text-2xl leading-8 xl:leading-[55px] tracking-normal font-bold">
      {props.children}
    </h1>
  );
};

export default FormTitle;
