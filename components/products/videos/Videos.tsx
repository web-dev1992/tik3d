import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import VideoProductList from "@components/products/videos/VideoProductList";
import ProductDropdown from "@components/ui/ProductDropdown";
import RightPanelItem from "@components/ui/RightPanelItem";
import Pagination from "@components/ui/Pagination";
const Dummy_Video_List = [
  {
    id: "v1",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v2",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v3",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v4",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v5",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v6",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v7",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v8",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v9",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v10",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v11",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v12",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v13",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v14",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v15",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v16",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v17",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v18",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v19",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v20",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v21",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v22",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v23",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v24",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v25",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v26",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v27",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v28",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v29",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v30",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v31",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v32",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v33",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v34",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v35",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v36",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v37",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v38",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v39",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v40",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v41",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v42",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v43",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v44",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v45",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v46",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
  },
  {
    id: "v47",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: true,
  },
  {
    id: "v48",
    name: "نام آیتم 25 کاراکتری",
    address: "/videos/webpack.mp4",
    ligthImage: "/images/video-ligth-image.png",
    isSpecial: false,
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
      <div className="my-[72px] w-11/12 sm:w-9/12 xl:w-[1350px] mt-5 m-auto flex flex-col flex-nowrap">
        <div className="flex flex-row gap-6  xl:gap-10">
          <div className="hidden lg:flex flex-col  flex-nowrap w-4/10 font-IRANSans gap-5 xl:gap-10 ">
            <div className="w-full flex flex-row flex-nowrap  justify-center items-start gap-2 ">
              <div>
                <button className="flex flex-row justify-center items-center rounded-[3px] w-[71px] h-9 xl:w-[115px] xl:h-14 xl:text-base xl:leading-6 xl:rounded-[5px] bg-abi text-white text-xxs leading-4 font-bold">
                  آیتم های رایگان
                </button>
              </div>
              <div>
                <div className="w-full h-max relative ">
                  <ProductDropdown
                    className="w-full h-full text-[9px] font-normal relative"
                    selectItems={[
                      "جدیدترین ها",
                      "پربازدیدترین ها",
                      "قدیمی ترین ها",
                    ]}
                    label="دسته بندی بر اساس:جدیدترین ها"
                  />
                </div>
              </div>
            </div>
            <div className="w-[243px] h-[482px] xl:w-[390px] xl:h-[776px] bg-[#2F80ED] px-2 shadow-[0_0_37px_-3px_#2F80ED] rounded-lg flex flex-col flex-nowrap items-start gap-4">
              <div className="w-full h-max flex flex-row justify-center items-center relative pt-4">
                <ProductDropdown
                  className="h-full text-[11px] font-normal relative"
                  selectItems={["مدل های سه بعدی ", "مدل های دو بعدی"]}
                  label="مدل های سه بعدی"
                />
              </div>
              {/* --------- */}
              <div className="w-full flex flex-col flex-nowrap justify-start items-start font-IRANSans overflow-auto ">
                <p className="text-abiStroke font-noraml text-[9px] xl:text-sm leading-5 text-right pr-6">
                  زیر مجموعه های این دسته:
                </p>
                <div className="overflow-scroll scrollbar-thin  scrollbar-thumb-white scrollbar-track-[#2D9CDB] w-full">
                  {ThreeDimension_DummyList.map((tdl) => (
                    <RightPanelItem item={tdl} key={tdl.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap justify-center ites-center ">
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
      </div>
    </ProductLayout>
  );
};

export default Videos;
