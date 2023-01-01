import LeftArrow from "@components/ui/LeftArrow";
import { ObjectId } from "mongodb";
import { useRouter } from "next/router";
import numbersWithCommas from "helper/numbersWithCommas";
interface SubscriptionPanelProps {
  index: number;
  _id: ObjectId;
  month: number;
  discountedPrice?: number;
  price: number;
}

const SubscriptionPanel: React.FC<{ props: SubscriptionPanelProps }> = ({
  props,
}) => {
  return (
    <div
      key={props._id.toString()}
      className="h-10 flex flex-row flex-nowrap justify-start items-center w-full group hover:bg-[#2F80ED] hover:text-white active:bg-[#2F80ED] active:text-white lg:h-14 xl:h-[90px] py-[3px] px-3 lg:px-4 xl:px-[30px] gap-4 bg-[#F6F8FB] border border-[#E2E2E2] rounded lg:rounded-md xl:rounded-[10px]"
    >
      <div className="w-2/3 flex flex-row flex-nowrap justify-start items-center gap-4 ">
        <button
          className="text-white rounded xl:rounded-lg w-[18px] h-[18px] lg:w-[26px] lg:h-[26px] xl:w-[42px] xl:h-[42px] text-center font-medium text-[8px] lg:text-xs xl:text-xl leading-[13px] xl:leading-[30px]"
          style={{
            background:
              "linear-gradient(319deg,#0898E7,5.17%,rgba(8,152,231,0.5)94%)",
          }}
        >
          {props.index + 1}
        </button>
        <div className="w-2/3 flex flex-col flex-nowrap justify-center items-between">
          <h3 className="w-full h-1/2 text-[7px] lg:text-[10px] xl:text-base lg:leading-[21px] xl:leading-8 tracking-normal font-medium leading-[14px] text-right group-hover:text-white">
            اشتراک {props.month}ماهه
          </h3>
          <div className="h-1/2 flex flex-row justify-start gap-4 text-[7px] lg:text-[9px] xl:text-[14px]">
            <span
              className={`leading-[14px] text-[#0F2137]  group-hover:text-white ${
                props.discountedPrice !== null &&
                props.discountedPrice &&
                "line-through"
              }`}
            >
              {numbersWithCommas(props.price)}تومان
            </span>
            <span className=" font-semibold text-[#2F80ED] leading-[14px] group-hover:text-white">
              {props.discountedPrice !== null &&
                props.discountedPrice &&
                `${numbersWithCommas(props.discountedPrice)}تومان`}
            </span>
          </div>
        </div>
      </div>
      <ContinueButton subId={props._id.toString()} />
    </div>
  );
};
const ContinueButton: React.FC<{ subId: string }> = ({ subId }) => {
  const router = useRouter();
  // const route = `/payment/${subId}/${discountCode ?? ""}`;
  return (
    <button
      onClick={() => router.push(`/payment/${subId}`)}
      className="w-1/3 flex flex-row flex-nowrap justify-end items-center gap-1 lg:gap-2"
    >
      <span className="text-[7px] lg:text-[10px] xl:text-base lg:leading-[21px] text-[#2F80ED] group-hover:text-white font-medium leading-[14px]">
        انتخاب و ادامه
      </span>
      <span className="text-[#2F80ED] group-hover:text-white">
        <LeftArrow />
      </span>
    </button>
  );
};

export default SubscriptionPanel;
