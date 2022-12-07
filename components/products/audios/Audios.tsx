import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import AudioProductList from "@components/products/audios/AudioProductList";
import Pagination from "@components/ui/Pagination";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ProductsSidebar from "@components/ui/ProductsSidebar";
const Dummy_Audio_List = [
  {
    id: "a1",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a2",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a3",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a4",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a5",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a6",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a7",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a8",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a9",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a10",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a11",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a12",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a13",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a14",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a15",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a16",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a17",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a18",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a19",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a20",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a21",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a22",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a23",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a24",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a25",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a26",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a27",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a28",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a29",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a30",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a31",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a32",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a33",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a34",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a35",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a36",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a37",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a38",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a39",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a40",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a41",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a42",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a43",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a44",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a45",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a46",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
    link: "#",
  },
  {
    id: "a47",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
    link: "#",
  },
  {
    id: "a48",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
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

const Audios = () => {
  const [audios, setAudios] = useState(Dummy_Audio_List);
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
      <div className="flex flex-row justify-center gap-6  xl:gap-10 my-[72px] m-auto w-11/12 sm:w-9/12 xl:w-full mt-5">
        {/* sidebar */}
        <ProductsSidebar panelList={ThreeDimension_DummyList} />
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
