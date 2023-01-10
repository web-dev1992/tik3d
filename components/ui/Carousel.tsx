import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ImageItem from "@components/products/images/ImageItem";
import { ObjectID } from "bson";


const buttons = {
  prevButton: (
    <svg
      className="w-3 h-5 lg:w-3.5 lg:h-[26px] xl:w-6 xl:h-11"
      viewBox="0 0 24 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.655731 42.6905C-0.139094 41.9113 -0.211351 40.692 0.43896 39.8328L0.655731 39.5866L18.5958 22L0.655731 4.41341C-0.139094 3.63421 -0.211351 2.41489 0.43896 1.55567L0.655731 1.30951C1.45056 0.530312 2.69433 0.459476 3.57078 1.097L3.82188 1.30951L23.3443 20.4481C24.1391 21.2273 24.2114 22.4466 23.561 23.3058L23.3443 23.552L3.82188 42.6905C2.94757 43.5476 1.53004 43.5476 0.655731 42.6905Z"
        fill="#C4C4C4"
      />
    </svg>
  ),
  nextButton: (
    <svg
      className="w-3 h-5 lg:w-3.5 lg:h-[26px] xl:w-6 xl:h-11"
      viewBox="0 0 24 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3443 1.30951C24.1391 2.08871 24.2114 3.30803 23.561 4.16725L23.3443 4.41341L5.40422 22L23.3443 39.5866C24.1391 40.3658 24.2114 41.5851 23.561 42.4443L23.3443 42.6905C22.5494 43.4697 21.3057 43.5405 20.4292 42.903L20.1781 42.6905L0.655731 23.552C-0.139094 22.7728 -0.211351 21.5534 0.43896 20.6942L0.655731 20.4481L20.1781 1.30951C21.0524 0.452392 22.47 0.452392 23.3443 1.30951Z"
        fill="#C4C4C4"
      />
    </svg>
  ),
};
const responsive = {
  0: { items: 3 },
  568: { items: 4 },
  // 640: { items: 4 },
  768: { items: 5 },
  1024: { items: 6 },
};


const Carousel:React.FC<{images:{_id:ObjectID, name:string, link:string, address:string, isSpecial:boolean}[]}> = (props) => {
  const { images } = props;
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const handleDragStart = (e) => e.preventDefault();
const items = images.map((image) => (
  <ImageItem image={image} key={image._id.toString()} onDragStart={handleDragStart} />
));
  return (
    <div className=" w-11/12   m-auto my-10 h-max flex flex-col flex-nowrap justify-center items-center font-IRANSans overflow-hidden ">
      <h1 className="w-full my-5 flex justify-start md:justify-center text-navyBluee font-bold text-xl lg:text-2xl xl:text-4xl tracking-normal">
        جدیدترین ها
      </h1>
      {hasWindow && (
        <div className="w-full h-max relative flex justify-end md:justify-center items-center ">
          <div className="w-[80%] ">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="responsive"
              infinite={true}
              disableDotsControls={true}
              disableButtonsControls={false}
              keyboardNavigation={true}
              renderPrevButton={() => {
                return (
                  <button className="absolute top-14 -left-6 lg:top-14 lg:-left-6 xl:top-20 xl:-left-8 ">
                    {buttons.nextButton}
                  </button>
                );
              }}
              renderNextButton={() => {
                return (
                  <button className="absolute top-14 -right-[10px] lg:top-14 lg:-right-6 xl:top-20 xl:-right-8 ">
                    {buttons.prevButton}
                  </button>
                );
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
