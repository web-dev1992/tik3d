import React, { useState } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import VideoProductList from "@components/products/videos/VideoProductList";
import Pagination from "@components/ui/Pagination";
import ProductsSidebar from "@components/ui/ProductsSidebar";
import { ObjectId } from "mongodb";
import ImageProductList from "../images/ImageProductList";
import AudioProductList from "../audios/AudioProductList";

interface SearchProps {
  videos?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    ligthImage: string;
    isSpecial: boolean;
  }[];
  images?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    isSpecial: boolean;
  }[];
  audios?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    isSpecial: boolean;
    ligthImage: string;
  }[];
}

const Search = (props: SearchProps) => {
  const { videos, images, audios } = props;

//   let fetchedItems=[];
//   videos && fetchedItems=[...videos];
//   images && fetchedItems=[...fetchedItems, ...images];
//   audios && fetchedItems=[...fetchedItems, ...audios];
//   const [items, setItems] = useState(fetchedItems);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(12);
//   const indexOfLastItems = currentPage * itemsPerPage;
//   const indexOfFirstItems = indexOfLastItems - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItems, indexOfLastItems);

//   // Change page
//   const paginateFront = () => {
//     currentPage < items.length / itemsPerPage &&
//       setCurrentPage(currentPage + 1);
//   };
//   const paginateBack = () => {
//     currentPage > 1 && setCurrentPage(currentPage - 1);
//   };
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ProductLayout>
      <div className="flex flex-row justify-start items-start gap-6  xl:gap-10 my-[72px] m-auto w-11/12 sm:w-9/12  xl:w-[1350px] mt-5">
        {/* sidebar */}
        <ProductsSidebar />
        <div className=" flex flex-col flex-nowrap justify-center items-center ">
          {videos && <VideoProductList videos={videos} />}
          {images && <ImageProductList images={images} />}
          {audios && <AudioProductList audios={audios} />}
          {!videos && !images && !audios && "محصولی یافت نشد!"}
          {/* pagination */}
          {/* <div
            className="flex flex-row justify-center items-center font-IRANSans mt-12 "
            style={{ direction: "rtl" }}
          >
            <Pagination
              ItemsPerPage={itemsPerPage}
              totalItems={items.length}
              paginate={paginate}
              currentPage={currentPage}
              paginateFront={paginateFront}
              paginateBack={paginateBack}
            />
          </div> */}
        </div>
      </div>
    </ProductLayout>
  );
};

export default Search;
