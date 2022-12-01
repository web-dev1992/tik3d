import { Fragment } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Comment from "./Comment";
const DummyComments = [
  {
    id: "c1",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    image: "/images/denny.png",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    star: 4,
  },
  {
    id: "c2",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    image: "/images/user.png",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    star: 4,
  },
  {
    id: "c3",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    image: "/images/user.png",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    star: 3,
  },
  {
    id: "c4",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    image: "/images/user.png",
    star: 2,
  },
  {
    id: "c5",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    image: "/images/user.png",
    star: 4,
  },
  {
    id: "c6",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    image: "/images/denny.png",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    star: 4,
  },
  {
    id: "c7",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    image: "/images/user.png",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    star: 4,
  },
  {
    id: "c8",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    image: "/images/user.png",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    star: 3,
  },
  {
    id: "c9",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    image: "/images/user.png",
    star: 2,
  },
  {
    id: "c10",
    name: "لورم ایپسوم",
    userName: "@denny.hil",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
    image: "/images/user.png",
    star: 4,
  },
];
const buttons = {
  prevButton: (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8498 4.22804L9.89804 0.395721C9.65692 0.161968 9.26592 0.161968 9.0248 0.395721C8.78362 0.629769 8.78362 1.00883 9.0248 1.24258L11.9225 4.05265H1.3686C1.0276 4.05265 0.751115 4.32065 0.751115 4.65148C0.751115 4.98201 1.0276 5.2503 1.3686 5.2503H11.9225L9.02486 8.06037C8.78375 8.29383 8.78375 8.67319 9.02486 8.90693C9.14548 9.02367 9.3035 9.08203 9.46152 9.08203C9.61952 9.08203 9.77754 9.02367 9.8981 8.90693L13.8498 5.07461C14.0909 4.84116 14.0909 4.4618 13.8498 4.22804Z"
        // fill="#BBC7D7"
        fill="#0F2137"
      />
    </svg>
  ),
  nextButton: (
    <svg
      width="23"
      height="10"
      viewBox="0 0 23 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.03785 4.2281L4.9896 0.395774C5.23071 0.162021 5.62179 0.162021 5.86284 0.395774C6.10401 0.629822 6.10401 1.00888 5.86284 1.24263L2.96517 4.05271H21.8269C22.1679 4.05271 22.4443 4.3207 22.4443 4.65153C22.4443 4.98206 22.1679 5.25035 21.8269 5.25035H2.96517L5.86277 8.06042C6.10394 8.29388 6.10394 8.67324 5.86277 8.90699C5.74222 9.02372 5.58414 9.08208 5.42612 9.08208C5.2681 9.08208 5.11009 9.02372 4.98953 8.90699L1.03785 5.07466C0.79668 4.84122 0.79668 4.46185 1.03785 4.2281Z"
        fill="#0F2137"
      />
    </svg>
  ),
};

const handleDragStart = (e) => e.preventDefault();
const items = DummyComments.map((comment) => (
  <Comment comment={comment} key={comment.id} onDragStart={handleDragStart} />
));

const CommentList = () => {
  return (
    <Fragment>
      <h3 className="w-full flex flex-row mt-16 mb-11 justify-center text-navyBluee text-center text-xl lg:text-2xl font-bold xl:text-4xl -tracking-normal leading-8 md:leading-9 xl:leading-[60px]">
        نظرات همراهان ما
      </h3>

      <div className="w-full h-max relative flex justify-center items-center overflow-hidden mr-6 lg:mr-52  ">
        <div className="w-full h-max">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
              0: { items: 1.5 },
              568: { items: 2 },
              640: { items: 2.5 },
              768: { items: 3 },
              1024: { items: 3.5 },
              1280: { items: 3.5 },
              // 1536:{ items:3.5}
            }}
            controlsStrategy="responsive"
            // infinite={true}
            disableDotsControls={true}
            disableButtonsControls={false}
            keyboardNavigation={true}
            autoPlay
            autoPlayControls={false}
            autoPlayStrategy="all"
            autoPlayInterval={1000}
            autoPlayDirection={"rtl"}
            renderPrevButton={() => {
              return (
                <button className="absolute top-52 left-48 sm:left-72 md:left-96 lg:bottom-2 lg:left-[600px] xl:top-80 xl:left-[850px]">
                  {buttons.nextButton}
                </button>
              );
            }}
            renderNextButton={() => {
              return (
                <button className="absolute top-52 left-56 sm:left-[320px] md:left-[420px] lg:bottom-2 lg:left-[630px] xl:top-80 xl:left-[880px]">
                  {buttons.prevButton}
                </button>
              );
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CommentList;
