import React, { useState } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import VideoProductList from "@components/products/videos/VideoProductList";
import Pagination from "@components/ui/Pagination";
import ProductsSidebar from "@components/ui/ProductsSidebar";
import { ObjectId } from "mongodb";

interface VideoProps {
  videos?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    ligthImage: string;
    isSpecial: boolean;
  }[];
}

const Videos = (props: VideoProps) => {
  const [videos, setVideos] = useState(props.videos);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(12);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos =
    videos !== null ? videos.slice(indexOfFirstVideo, indexOfLastVideo) : null;

  // Change page
  const paginateFront = () => {
    currentPage < videos.length / videosPerPage &&
      setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ProductLayout>
      <div className="flex flex-row justify-center items-start gap-6  xl:gap-10 my-[72px] m-auto w-full mt-5 xl:px-72 lg:px-44 px-[22px]">

      {/* sidebar */}
      <ProductsSidebar />
      <div className="flex flex-col flex-nowrap justify-center items-center w-full ">
        <VideoProductList videos={currentVideos} />
        {/* pagination */}
        <div
          className="flex flex-row justify-center items-center font-IRANSans mt-12 "
          style={{ direction: "rtl" }}
        >
          {videos !== null && (
            <Pagination
              ItemsPerPage={videosPerPage}
              totalItems={videos !== null ? videos.length : 0}
              paginate={paginate}
              currentPage={currentPage}
              paginateFront={paginateFront}
              paginateBack={paginateBack}
            />
          )}
        </div>
      </div>
      </div>
    </ProductLayout>
  );
};

export default Videos;
