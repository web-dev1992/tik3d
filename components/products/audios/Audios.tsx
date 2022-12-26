import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import AudioProductList from "@components/products/audios/AudioProductList";
import Pagination from "@components/ui/Pagination";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ProductsSidebar from "@components/ui/ProductsSidebar";
import { ObjectId } from "mongodb";

interface AudioProps {
  audios?: {
    _id: ObjectId;
    link: string;
    address: string;
    name: string;
    isSpecial: boolean;
    ligthImage: string;
  }[];
}
const Audios = (props: AudioProps) => {
  const [audios, setAudios] = useState(props.audios);
  const [currentPage, setCurrentPage] = useState(1);
  const [audiosPerPage, setAudiosPerPage] = useState(20);
  const indexOfLastAudio = currentPage * audiosPerPage;
  const indexOfFirstAudio = indexOfLastAudio - audiosPerPage;
  const currentAudios = audios.slice(indexOfFirstAudio, indexOfLastAudio);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width >= 768) setAudiosPerPage(20);
    else if (width >= 640 && width <= 768) setAudiosPerPage(16);
    else setAudiosPerPage(15);
  }, [width]);
  // Change page
  const paginateFront = () => {
    currentPage < audios.length / audiosPerPage &&
      setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ProductLayout>
      <div className="flex flex-row justify-center items-start gap-6  xl:gap-10 my-[72px] m-auto w-11/12 sm:w-9/12 xl:w-full mt-5">
        {/* sidebar */}
        <ProductsSidebar />
        {/* productlist */}
        <div className="flex flex-col flex-nowrap justify-center items-center ">
          <AudioProductList audios={currentAudios} />
          {/* pagination */}
          <div
            className="flex flex-row justify-center items-center font-IRANSans mt-12 "
            style={{ direction: "rtl" }}
          >
            <Pagination
              ItemsPerPage={audiosPerPage}
              totalItems={audios.length}
              paginate={paginate}
              currentPage={currentPage}
              paginateFront={paginateFront}
              paginateBack={paginateBack}
            />
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Audios;
