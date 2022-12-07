import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface imageProps {
  id: string;
  address: string;
  link: string;
}
const ImageGallery: React.FC<{ images: imageProps[] }> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container w-[329px] h-[384px] lg:w-[373px] lg:h-[435px] xl:w-[600px] xl:h-[700px] ">
      <Swiper
        loop={true}
        spaceBetween={1}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="top_swiper  w-[329px] h-[329px] lg:w-[373px] lg:h-[373px] xl:w-[600px] xl:h-[600px] relative object-cover overflow-hidden aspect-square rounded lg:rounded-md">
              <Link href={image.link}>
                <Image
                  src={image.address}
                  alt={`Image gallery- image ${index}`}
                  layout="fill"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={4}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="bottom_swiper mt-2 xl:mt-3 w-[48px] h-[48px] lg:w-[55px] lg:h-[55px] xl:w-[88px] xl:h-[88px] relative object-cover overflow-hidden aspect-square rounded xl:rounded-lg">
              <Link href={image.link}>
                <Image
                  src={image.address}
                  alt={`Image gallery- image ${index}`}
                  layout="fill"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
