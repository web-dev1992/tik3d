import ProductHeader from "@components/layout/ProductHeader";
import ProductsFooter from "@components/layout/ProductsFooter";

const ProductLayout = (props) => {
  return (
    <div className="bg-[#F6F8FB] h-full w-full ">
      <ProductHeader />
      {props.children}
      <ProductsFooter />
    </div>
  );
};

export default ProductLayout;
