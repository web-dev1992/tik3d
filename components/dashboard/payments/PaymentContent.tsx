import SortIcon from "@components/ui/SortIcon";
import { Fragment, useState } from "react";
import ContentTitle from "../ui/ContentTitle";
import { ObjectId } from "mongodb";
import numbersWithCommas from "helper/numbersWithCommas";
import persianDate from "helper/persianDate";
interface paymentsProps {
  _id: ObjectId;
  subId: string;
  userId: string;
  amount: number;
  paid: number;
  discount: number;
  description: string;
  active: boolean;
  payStatus: string;
  startAt: Date;
  endAt: Date;
}
const PaymentContent: React.FC<{ payments: paymentsProps[] | null }> = ({
  payments,
}) => {
  const [size, setSize] = useState<number>(10);
  const [isMore, setIsMore] = useState<boolean>(payments.length > size);

  const handleMore = () => {
    if (size + 5 < payments.length) setSize((prev) => prev + 5);
    else {
      setSize(payments.length);
      setIsMore(false);
    }
  };
  return (
    <Fragment>
      <div className="w-full flex flex-col flex-nowrap justify-center items-center lg:gap-2 ">
        <ContentTitle title="آخرین پرداختی ها" />
        <div className="w-full flex flex-col flex-nowrap justify-center items-center gap-[5px] lg:gap-[7px] xl:gap-2.5 ">
          {/* first row(header) */}
          <div className="w-full h-6 lg:h-8 xl:h-[50px] flex flex-row flex-nowrap justify-center items-center bluuuu lg:bg-abi  text-white text-[8px] lg:text-xxs xl:text-base  font-normal rounded-[5px] lg:rounded-[7px] xl:rounded-[10px] ">
            <span className="w-3/12 lg:w-2/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px] border-l border-[#E2E2E2]">
              تاریخ
            </span>
            <span className="w-4/12 lg:w-3/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px] border-l border-[#E2E2E2]">
              مبلغ (به تومان)
            </span>
            <span className="w-2/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] border-l xl:leading-[55px] border-[#E2E2E2]">
              وضعیت
            </span>
            <span className="w-3/12 lg:w-5/12 h-full flex flex-row item-center justify-center leading-[26px] lg:leading-[34px] xl:leading-[55px]">
              جزئیات
            </span>
          </div>
          {/* other rows */}
          <div className="w-full h-80 overflow-y-auto ">
            {payments &&
              payments.slice(0, size).map((payment) => (
                <div
                  key={payment._id.toString()}
                  className="w-full lg:h-8 xl:h-[50px] flex flex-row flex-nowrap justify-center items-center text-gray-500 text-[8px] lg:text-xxs xl:text-xs leading-5 lg:leading-[34px] xl:leading-[55px] font-normal rounded-[5px] lg:rounded-[7px] xl:rounded-[10px] border border-[#E2E2E2] "
                >
                  <span className="w-3/12 lg:w-2/12 h-full flex flex-row item-center justify-center  border-l border-[#E2E2E2] ">
                    {persianDate(payment.startAt)}
                  </span>
                  <span className="w-4/12 lg:w-3/12 h-full flex flex-row item-center justify-center border-l border-[#E2E2E2]">
                    {numbersWithCommas(payment.paid)}تومان
                  </span>
                  <span
                    className={`w-2/12 h-full flex flex-row item-center justify-center border-l border-[#E2E2E2] ${
                      payment.payStatus === "successful"
                        ? "text-green-700"
                        : "text-red-600"
                    }`}
                  >
                    {payment.payStatus === "successful" ? "موفق" : "ناموفق"}
                  </span>
                  <span className="w-3/12 lg:w-5/12 h-full flex flex-row item-center justify-center">
                    {payment.description}
                  </span>
                </div>
              ))}
          </div>
        </div>
        {isMore && (
          <div className="w-full h-7 mt-[14px] lg:mt-1  flex flex-row justify-end items-center  ">
            <button
              onClick={handleMore}
              className="h-full flex flex-row flex-nowrap items-center justify-center gap-1 lg:gap-2 xl:gap-3 w-max text-[#848484] leading-[26px] font-normal text-[6px] lg:text-[8px] xl:text-xs"
            >
              <span>بیشتر</span>
              <SortIcon className="w-2 h-1 lg:w-3 xl:w-5 xl:h-2 " />
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PaymentContent;
