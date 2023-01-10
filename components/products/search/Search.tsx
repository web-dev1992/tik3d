import React from "react";
import ProductLayout from "@components/layout/ProductLayout";
import VideoProductList from "@components/products/videos/VideoProductList";
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

  // let fetchedItems = [];
  // if (videos) {
  //   videos.forEach((video) => {
  //     fetchedItems = [
  //       ...fetchedItems,
  //       {
  //         _id: video._id,
  //         link: video.link,
  //         address: video.address,
  //         name: video.name,
  //         ligthImage: video.ligthImage,
  //         isSpecial: video.isSpecial,
  //         type: "video",
  //       },
  //     ];
  //   });
  // }
  // if (audios) {
  //   audios.forEach((audio) => {
  //     fetchedItems = [
  //       ...fetchedItems,
  //       {
  //         _id: audio._id,
  //         link: audio.link,
  //         address: audio.address,
  //         name: audio.name,
  //         ligthImage: audio.ligthImage,
  //         isSpecial: audio.isSpecial,
  //         type: "audio",
  //       },
  //     ];
  //   });
  // }
  // if (images) {
  //   images.forEach((image) => {
  //     fetchedItems = [
  //       ...fetchedItems,
  //       {
  //         _id: image._id,
  //         link: image.link,
  //         address: image.address,
  //         name: image.name,
  //         isSpecial: image.isSpecial,
  //         type: "image",
  //       },
  //     ];
  //   });
  // }

  // const [items, setItems] = useState(fetchedItems);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(12);
  // const indexOfLastItems = currentPage * itemsPerPage;
  // const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  // const currentItems = items.slice(indexOfFirstItems, indexOfLastItems);
  // console.log("currentItems", currentItems);
  // // Change page
  // const paginateFront = () => {
  //   currentPage < items.length / itemsPerPage &&
  //     setCurrentPage(currentPage + 1);
  // };
  // const paginateBack = () => {
  //   currentPage > 1 && setCurrentPage(currentPage - 1);
  // };
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ProductLayout>
      <div className="flex flex-row justify-start items-start gap-6  xl:gap-10 my-[72px] m-auto w-11/12 sm:w-9/12  xl:w-[1350px] mt-5">
        {/* sidebar */}
        <ProductsSidebar />
        <div className=" flex flex-col flex-nowrap justify-center items-center ">
          <>
            {videos && <VideoProductList videos={videos} />}
            <br />
            {images && <ImageProductList images={images} />}
            <br />
            {audios && <AudioProductList audios={audios} />}
            {/* {currentItems.map((item) => {
              item.type === "audio" ? (
                <AudioItem audio={item} />
              ) : item.type === "video" ? (
                <VideoItem video={item} />
              ) : (
                <ImageItem image={item} />
              );
            })} */}
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
          </>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Search;
