import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import VideoProductList from "@components/products/videos/VideoProductList";
import Pagination from "@components/ui/Pagination";
import ProductsSidebar from "@components/ui/ProductsSidebar";
const Dummy_Video_List = [
  {
    id: "v1",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v2",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v3",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v4",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v5",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v6",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v7",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v8",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v9",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v10",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v11",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v12",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v13",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v14",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v15",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v16",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v17",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v18",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v19",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v20",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v21",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v22",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v23",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v24",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v25",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v26",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v27",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v28",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v29",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v30",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v31",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v32",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v33",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v34",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v35",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v36",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v37",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v38",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v39",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v40",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v41",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v42",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v43",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v44",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v45",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v46",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "v47",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "v48",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
    link: "#",
  },
];

const ThreeDimension_DummyList = [
  {
    id: "t1",
    name: "تصاویر پس زمینه",
    items: [
      {
        id: "i1",
        name: "هود",
      },
      {
        id: "i2",
        name: "کابینت",
      },
      {
        id: "i3",
        name: "لوازم آشپزخانه",
      },
    ],
  },
  {
    id: "t2",
    name: "تصاویر پس زمینه",
    items: [
      {
        id: "i1",
        name: "هود",
      },
      {
        id: "i2",
        name: "کابینت",
      },
      {
        id: "i3",
        name: "لوازم آشپزخانه",
      },
    ],
  },
  {
    id: "t3",
    name: "تصاویر پس زمینه",
    items: [
      {
        id: "i1",
        name: "هود",
      },
      {
        id: "i2",
        name: "کابینت",
      },
      {
        id: "i3",
        name: "لوازم آشپزخانه",
      },
    ],
  },
  {
    id: "t4",
    name: "تصاویر پس زمینه",
    items: [
      {
        id: "i1",
        name: "هود",
      },
      {
        id: "i2",
        name: "کابینت",
      },
      {
        id: "i3",
        name: "لوازم آشپزخانه",
      },
    ],
  },
  {
    id: "t5",
    name: "تصاویر پس زمینه",
    items: [
      {
        id: "i1",
        name: "هود",
      },
      {
        id: "i2",
        name: "کابینت",
      },
      {
        id: "i3",
        name: "لوازم آشپزخانه",
      },
    ],
  },
  {
    id: "t6",
    name: "تصاویر پس زمینه",
    items: [
      {
        id: "i1",
        name: "هود",
      },
      {
        id: "i2",
        name: "کابینت",
      },
      {
        id: "i3",
        name: "لوازم آشپزخانه",
      },
    ],
  },
];

const Videos = () => {
  const [videos, setVideos] = useState(Dummy_Video_List);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(12);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

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
      <div className="flex flex-row justify-center gap-6  xl:gap-10 my-[72px] m-auto w-11/12 sm:w-9/12  xl:w-[1350px] mt-5">
        {/* sidebar */}
        <ProductsSidebar panelList={ThreeDimension_DummyList} />
        <div className=" flex flex-col flex-nowrap justify-center items-center ">
          <VideoProductList videos={currentVideos} />
          {/* pagination */}
          <div
            className="flex flex-row justify-center items-center font-IRANSans mt-12 "
            style={{ direction: "rtl" }}
          >
            <Pagination
              ItemsPerPage={videosPerPage}
              totalItems={videos.length}
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

export default Videos;
