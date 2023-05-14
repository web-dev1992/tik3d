import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import ImageProductList from "./ImageProductList";
import Pagination from "@components/ui/Pagination";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ProductsSidebar from "@components/ui/ProductsSidebar";
import { ObjectId } from "mongodb";

interface ImageProps {
  images?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    isSpecial: boolean;
  }[];
}
const Images = (props: ImageProps) => {
  const [images, setImages] = useState(props.images);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(20);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages =
    images !== null ? images.slice(indexOfFirstImage, indexOfLastImage) : null;
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width >= 768) setImagesPerPage(20);
    else if (width >= 640 && width <= 768) setImagesPerPage(16);
    else setImagesPerPage(15);
  }, [width]);
  // Change page
  const paginateFront = () => {
    currentPage < images.length / imagesPerPage &&
      setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ProductLayout>
      <ProductsSidebar />
      {/* prosuctsLaist */}
      <div className="flex flex-col flex-nowrap justify-center items-center w-full ">
        <ImageProductList images={currentImages} />
        {/* pagination */}
        <div
          className="flex flex-row justify-center items-center font-IRANSans mt-12 "
          style={{ direction: "rtl" }}
        >
          {images !== null && (
            <Pagination
              ItemsPerPage={imagesPerPage}
              totalItems={images !== null ? images.length : 0}
              paginate={paginate}
              currentPage={currentPage}
              paginateFront={paginateFront}
              paginateBack={paginateBack}
            />
          )}
        </div>
      </div>
    </ProductLayout>
  );
};

export default Images;
