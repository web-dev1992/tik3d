import ProductHeader from "@components/layout/ProductHeader";
import ProductsFooter from "@components/layout/ProductsFooter";

const ProductLayout = (props) => {
  return (
    <div className="bg-[#F6F8FB] h-full flex flex-col justify-center items-center max-w-[1920px] m-auto ">
      <ProductHeader />
      <div className="flex flex-row justify-center items-start gap-6  xl:gap-10 my-[72px] m-auto w-full mt-5 xl:px-72 lg:px-44 px-[22px]">
        {props.children}
      </div>
      <ProductsFooter />
    </div>
  );
};

export default ProductLayout;
