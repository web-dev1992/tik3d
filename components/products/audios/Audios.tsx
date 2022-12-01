import React, { useState, useEffect } from "react";
import ProductLayout from "@components/layout/ProductLayout";
import AudioProductList from "@components/products/audios/AudioProductList";
import ProductDropdown from "@components/ui/ProductDropdown";
import RightPanelItem from "@components/ui/RightPanelItem";
import Pagination from "@components/ui/Pagination";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const Dummy_Audio_List = [
  {
    id: "a1",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a2",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a3",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a4",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a5",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a6",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a7",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a8",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a9",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a10",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a11",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a12",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a13",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a14",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a15",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a16",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a17",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a18",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a19",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a20",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a21",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a22",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a23",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a24",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a25",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a26",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a27",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a28",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a29",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a30",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a31",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a32",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a33",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a34",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a35",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a36",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a37",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a38",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a39",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a40",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a41",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a42",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a43",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a44",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a45",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a46",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: false,
  },
  {
    id: "a47",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
    isSpecial: true,
  },
  {
    id: "a48",
    name: "نام آیتم 25 کاراکتری",
    address: "/musics/Earth.mp3",
    ligthImage: "/images/music-poster.png",
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
      <div className="my-[72px] w-11/12 sm:w-9/12 xl:w-full mt-5 m-auto flex flex-col items-center flex-nowrap ">
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
      </div>
    </ProductLayout>
  );
};

export default Audios;
