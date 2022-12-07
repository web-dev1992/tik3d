import ImageItem from "@components/products/images/ImageItem";
interface image {
  id: string;
  name: string;
  address: string;
  link: string;
  isSpecial: boolean;
  image: string
}

const ImageProductList: React.FC<{ images: image[] }> = ({ images }) => {
  return (
    <div className="w-full lg:w-6/10 bg-[#F6F8FB]  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-between items-center  m-auto place-content-between place-items-center gap-2 lg:gap-4 xl:gap-6">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageProductList;
