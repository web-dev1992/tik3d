import ProductHeader from "@components/layout/ProductHeader";
import ProductsFooter from "@components/layout/ProductsFooter";

const ProductLayout = (props) => {
  return (
    <div className="bg-[#F6F8FB] h-full flex flex-col justify-center items-center max-w-[1920px] m-auto ">
      <ProductHeader />

      {props.children}

      <ProductsFooter />
    </div>
  );
};

export default ProductLayout;
