import ProductHeader from "@components/layout/ProductHeader";
const PaymentLayout = (props) => {
  return (
    <div className="w-full h-full flex flex-col flex-nowrap justify-center items-center bg-[#F6F8FB] gap-24">
      <ProductHeader />
      <div className="w-[327px] lg:w-[351px] xl:w-[566px] flex flex-col flex-nowrap justify-center items-center gap-[18px] bg-white pt-[18px] px-[42px] rounded-[5px] xl:rounded-lg mb-56 lg:mb-40 xl:mb-64">
        {props.children}
      </div>
    </div>
  );
};

export default PaymentLayout;
