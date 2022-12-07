import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductLayout from "@components/layout/ProductLayout";
import ImageGallery from "@components/ui/ImageGallery/ImageGallery";
import Description from "../Description";
import Downloads from "../Downloads";
import CommentsList from "../Comment";
import Introduction from "../Introduction";
import InsertComment from "../InsertComment";
const Dummy_Image_Item = {
  id: "a1",
  name: "نام آیتم 25 کاراکتری",
  Images: [
    {
      id: "i1",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i2",
      address: "/images/Cover.png",
      link: "#",
    },
    {
      id: "i3",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i4",
      address: "/images/Cover.png",
      link: "#",
    },
    {
      id: "i5",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i6",
      address: "/images/Cover.png",
      link: "#",
    },
    {
      id: "i7",
      address: "/images/lava-material.png",
      link: "#",
    },
    {
      id: "i8",
      address: "/images/Cover.png",
      link: "#",
    },
  ],
  renderMotorName: "Vray",
  version: "Autodesk 3ds Max 2012",
  style: "Modern",
  ManufacturerSite: "exaple.ir",
  tags: [
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
    "تگ نمونه",
  ],
  ligthImage: "/images/audio-larg-poster.png",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  isSpecial: true,
};
const Dummy_Comments = [
  {
    id: "c1",
    commenter: "لورم ایپسوم",
    userName: "@dennyhill",
    commentText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    rate: 4,
    image: "/images/denny.png",
  },
  {
    id: "c2",
    commenter: "لورم ایپسوم",
    userName: "@dennyhill",
    commentText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    rate: 5,
    image: "/images/denny.png",
  },
  {
    id: "c3",
    commenter: "لورم ایپسوم",
    userName: "@dennyhill",
    commentText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    rate: 3,
    image: "/images/denny.png",
  },
];
const downloads = [
  {
    id: "d1",
    fileName: "دانلود مدل تری دی مکس(عادی)",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d2",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d3",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d4",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d5",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d6",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
  {
    id: "d7",
    fileName: "دانلود مدل تری دی مکس",
    size: 7.67,
    link: "/musics/Earth.mp3",
  },
];

const ImageComponent = () => {
  return (
    <ProductLayout>
      <div className="bg-white w-full m-auto flex flex-col flex-nowrap  pb-14 ">
        {/* <SiteMap/> */}
        <p className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  text-right font-IRANSans text-[#0F2137] text-[8px] xl:text-xs font-light opacity-60 leading-3 mt-4 lg:mt-[42px] xl:mt-16 px-2 lg:px-4 xl:px-10">
          خانه / متریال / آشپرخانه
        </p>
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  flex flex-col flex-nowrap lg:flex-row justify-center items-center lg:items-start gap-4 lg:gap-2 mt-4">
          {/* Image Gallery Component */}
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <ImageGallery images={Dummy_Image_Item.Images} />
          </div>
          {/* introduction */}
          <Introduction introProps={Dummy_Image_Item} />
        </div>
      </div>
      <div className="bg-[#F6F8FB] w-full m-auto flex flex-col flex-nowrap pt-8">
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto  flex flex-col flex-nowrap lg:flex-row justify-center items-center lg:items-start xl:gap-4 lg:gap-1  mt-4">
          {/* description */}
          <Description text={Dummy_Image_Item.description} />
          {/* downloads */}
          <Downloads downloads={downloads} />
        </div>
      </div>
      <div className="bg-[#F6F8FB] w-full m-auto pt-8">
        <div className="w-11/12 sm:w-9/12 xl:w-[1350px] m-auto flex flex-col flex-nowrap  justify-center items-start  lg:gap-2 mt-4">
          <h2 className="font-bold px-3 text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal ">
            نظرات
          </h2>
          <div className="w-full  flex flex-col flex-nowrap justify-center items-start lg:flex-row lg:justify-start font-IRANSans xl:gap-4 lg:gap-1  ">
            {/* comments */}
            <CommentsList commentsList={Dummy_Comments} />
            {/* insert comment */}
            <InsertComment />
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default ImageComponent;
