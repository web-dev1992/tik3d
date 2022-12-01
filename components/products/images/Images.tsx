import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import ImageProductList from "./ImageProductList";
import ProductDropdown from "@components/ui/ProductDropdown";
import RightPanelItem from "@components/ui/RightPanelItem";
import Pagination from "@components/ui/Pagination";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const Dummy_Image_List = [
  {
    id: "i1",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i2",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i3",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i4",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i5",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i6",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i7",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i8",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i9",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i10",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i11",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i12",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i13",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i14",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i15",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i16",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i17",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i18",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i19",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i20",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i21",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i22",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i23",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i24",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i25",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i26",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i27",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i28",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i29",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i30",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i31",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i32",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i33",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i34",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i35",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i36",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i37",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i38",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i39",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i40",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i41",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i42",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i43",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i44",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i45",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i46",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
  },
  {
    id: "i47",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
  },
  {
    id: "i48",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
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

const Images = () => {
  const [images, setImages] = useState(Dummy_Image_List);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(20);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
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
      <div className="my-[72px] w-11/12 sm:w-9/12 xl:w-[1350px] mt-5 m-auto flex flex-col flex-nowrap">
        <div className="flex flex-row gap-6  xl:gap-10 ">
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
            <ImageProductList images={currentImages} />
            {/* pagination */}
            <div
              className="flex flex-row justify-center items-center font-IRANSans mt-12 "
              style={{ direction: "rtl" }}
            >
              <Pagination
                ItemsPerPage={imagesPerPage}
                totalItems={images.length}
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

export default Images;
