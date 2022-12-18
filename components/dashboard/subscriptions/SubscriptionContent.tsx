import { Fragment, useState } from "react";
import ContentTitle from "@components/dashboard/ui/ContentTitle";
import SubscriptionPanel from "@components/dashboard/subscriptions/SubscriptionPanel";
import DiscountBox from "@components/dashboard/subscriptions/DiscountBox";
const subscriptions = [
  { id: "s1", month: "1", price: "49,000", basePrice: "99,000" },
  { id: "s2", month: "2", price: "49,000", basePrice: "99,000" },
  { id: "s3", month: "3", price: "49,000", basePrice: "99,000" },
];

const SubscriptionContent = () => {
  const [showDiscount, setShowDiscount] = useState(false);
  const openCloseDiscount = () => {
    setShowDiscount((prev) => !prev);
  };
  return (
    <Fragment>
      <div className="w-full h-max flex flex-col flex-nowrap justify-center items-center ">
        <ContentTitle title="لیست اشتراک" />
        <div className="w-full flex flex-col flex-nowrap justify-center items-start gap-[7px] lg:gap-2.5 xl:gap-4 ">
          {subscriptions.map((subscription, index) => (
            <SubscriptionPanel
              key={index}
              props={{
                index,
                month: subscription.month,
                basePrice: subscription.basePrice,
                price: subscription.price,
              }}
            />
          ))}
        </div>
        <DiscountBox
          props={{
            showDiscount: showDiscount,
            openCloseDiscount: openCloseDiscount,
          }}
        />
      </div>
      <div className="flex flex-col flex-nowrap w-full gap-1 xl:gap-2 ">
        <h3 className="w-full text-black text-[7px] lg:text-[10px] xl:text-base font-medium leading-[14px] lg:leading-[21px] xl:leading-8 text-right tracking-wide">
          ویژگی های اشتراک
        </h3>
        <p className="w-full text-[#333333] text-[6px] lg:text-[9px] xl:text-[14px] font-light text-right leading-[9px] lg:leading-4 xl:leading-[21px] tracking-widest lg:tracking-wide lg:pb-20 xl:pb-24">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
        </p>
      </div>
    </Fragment>
  );
};

export default SubscriptionContent;
