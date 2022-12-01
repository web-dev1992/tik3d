import { Fragment } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ListItem from "@components/ui/ListItem";
const DUMMY_LIST = [
  {
    id: "e1",
    name: "آیتم ۲۵ کاراکتری",
    link: "/products",
    address: "/images/lava.png",
    isSpecial: true,
  },
  {
    id: "e2",
    name: "آیتم ۲۵ کاراکتری",
    link: "/products",
    address: "/images/lava.png",
    isSpecial: false,
  },
  {
    id: "e3",
    name: "آیتم ۲۵ کاراکتری",
    link: "/products",
    address: "/images/lava.png",
    isSpecial: false,
  },
  {
    id: "e4",
    name: "آیتم ۲۵ کاراکتری",
    link: "/products",
    address: "/images/lava.png",
    isSpecial: false,
  },
  {
    id: "e5",
    name: "آیتم ۲۵ کاراکتری",
    link: "/products",
    address: "/images/lava.png",
    isSpecial: false,
  },
  {
    id: "e6",
    name: "آیتم ۲۵ کاراکتری",
    link: "/products",
    address: "/images/lava.png",
    isSpecial: true,
  },
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  640: { items: 3 },
  768: { items: 6 },
  1024: { items: 6 },
};

const handleDragStart = (e) => e.preventDefault();
const items = DUMMY_LIST.map((image) => (
  <ListItem item={image} key={image.id}  onDragStart={handleDragStart} />
      // <ImageItem key={image.id} image={image} onDragStart={handleDragStart} />
    ));
const Carousel = () => {
  return (
    <Fragment>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
        disableDotsControls={true}
        disableButtonsControls={true}
        paddingLeft={10}
        paddingRight={10}
      />
    </Fragment>
  );
};

export default Carousel;
