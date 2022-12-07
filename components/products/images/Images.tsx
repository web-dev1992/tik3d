import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import ImageProductList from "./ImageProductList";
import Pagination from "@components/ui/Pagination";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ProductsSidebar from "@components/ui/ProductsSidebar";
const Dummy_Image_List = [
  {
    id: "i1",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i2",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i3",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i4",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i5",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i6",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i7",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i8",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i9",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i10",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i11",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i12",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i13",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i14",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i15",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i16",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i17",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i18",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i19",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i20",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i21",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i22",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i23",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i24",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i25",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i26",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i27",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i28",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i29",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i30",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i31",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i32",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i33",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i34",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i35",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i36",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i37",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i38",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i39",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i40",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i41",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i42",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i43",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i44",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i45",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i46",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
  },
  {
    id: "i47",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: true,
    image: "/images/image-poster.png",
  },
  {
    id: "i48",
    name: "نام آیتم 25 کاراکتری",
    address: "/images/image-poster.png",
    link: "/products/:productId",
    isSpecial: false,
    image: "/images/image-poster.png",
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
      <div className="flex flex-row justify-center gap-6  xl:gap-10 my-[72px] m-auto w-11/12 sm:w-9/12 xl:w-full mt-5">
        <ProductsSidebar panelList={ThreeDimension_DummyList} />
        {/* prosuctsLaist */}
        <div className="flex flex-col flex-nowrap justify-center items-center ">
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
    </ProductLayout>
  );
};

export default Images;
