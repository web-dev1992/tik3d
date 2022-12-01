import { useRef, useEffect, useState, ReactNode, Fragment } from "react";
import { createPortal } from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return (
    <div
      className="fixed w-full h-full top-0 right-0 z-10 flex flex-row justify-center bg-[rgba(246, 248, 251, 0.07)] backdrop-blur-[6px]"
      onClick={props.onClick}
    />
  );
};

const ModalOerlay = ({ closeConditionsHandler }) => {
  return (
    <div className="shadow-[0_5px_15px_rgba(0,0,0,0.17),0_15px_35px_rgba(50,50,93,0.2)] blur-none z-20 flex flex-col flex-nowrap justify-start items-center gap-[18px] bg-white py-0  px-5 lg:pr-[67px] lg:pl-[52px] rounded w-[280px] h-[468px] lg:w-[800px] lg:h-[450px] xl:w-[1095px] xl:h-[737px] absolute inset-y-44 inset-x-12 lg:inset-x-32 xl:top-52 xl:inset-x-[10%] ">
      <h1 className=" w-full text-center text-[#0F2137]  text-xs lg:text-sm xl:text-2xl leading-[26px] lg:leading-8 xl:leading-[55px] tracking-normal font-bold mt-2 lg:mt-8 ">
        قوانین و مقررات
      </h1>
      <div className="flex flex-col flex-nowrap justify-start items-start gap-1 xl:gap-8 xl:my-8 pb-10 xl:pb-20 ">
        <p className="font-light text-[6px] lg:text-xxs xl:text-xs leading-[18px] text-right text-[#333]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. .
        </p>
        <p className="font-light text-[6px] lg:text-xxs xl:text-xs leading-[18px] text-right text-[#333]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. .
        </p>
        <p className="font-light text-[6px] lg:text-xxs xl:text-xs leading-[18px] text-right text-[#333]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. .
        </p>
      </div>
      <span className="flex justify-end w-full">
        <button
          className="w-[74px] h-10 lg:w-20 lg:h-12 xl:w-[155px] xl:h-[87px] rounded xl:rounded-md text-white text-center text-[8px] lg:text-sm xl:text-lg font-noraml leading-[6px] xl:leading-3"
          style={{
            background:
              "linear-gradient(229deg, #FD5D93 8.35%, #EC250D 87.43%)",
          }}
          onClick={closeConditionsHandler}
        >
          بستن
        </button>
      </span>
    </div>
  );
};
const TermsConditions = ({ closeConditionsHandler }) => {
  const backdropRef = useRef<Element | null>(null);
  const overlayRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    backdropRef.current = document.querySelector<HTMLElement>("#backdrop-root");
    overlayRef.current = document.querySelector<HTMLElement>("#overlay-root");

    setMounted(true);
  }, []);

  return (
    <Fragment>
      {mounted && backdropRef.current && overlayRef.current && (
        <Fragment>
          {createPortal(
            <Backdrop onClick={closeConditionsHandler} />,
            backdropRef.current
          )}
          {createPortal(
            <ModalOerlay closeConditionsHandler={closeConditionsHandler} />,
            overlayRef.current
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default TermsConditions;
