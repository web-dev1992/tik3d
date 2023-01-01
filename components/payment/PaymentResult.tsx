import Link from "next/link";
import SuccessTikIcon from "@components/ui/SuccessTikIcon";
import UnsuccessIcon from "@components/ui/UnsuccessIcon";
import { FormEvent } from "react";
import { useRouter } from "next/dist/client/router";

const PaymentResult: React.FC<{
  isPaymentSuccessful: boolean;
  setIsPaymentDone;
}> = ({ isPaymentSuccessful, setIsPaymentDone }) => {
  const router = useRouter();
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (isPaymentSuccessful) router.replace("/dashboard");
    else {
      setIsPaymentDone(false);
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-8 xl:gap-14  py-24 xl:py-[164px] "
    >
      <span>
        {isPaymentSuccessful ? (
          <SuccessTikIcon className="w-14 h-[42px] lg:w-[60px] lg:h-11 xl:w-24 xl:h-[72px]" />
        ) : (
          <UnsuccessIcon />
        )}
      </span>
      <span className="w-full text-center text-black font-medium text-xl lg:text-[22px] xl:text-4xl lg:leading-9 leading-[35px] ">
        پرداخت موفقیت آمیز {isPaymentSuccessful ? "بود" : "نبود"}
      </span>
      <div className="w-full flex flex-col flex-nowrap justify-start items-center gap-[5px] xl:gap-[9px]">
        <button
          type="submit"
          className="w-full h-[34px] lg:h-9 xl:h-14 rounded-[2px] lg:rounded font-bold text-center bg-abi text-white text-xxs xl:text-base"
        >
          ادامه
        </button>
        {!isPaymentSuccessful && (
          <Link href="/dashboard">
            <a className="w-full text-[#2D9CDB] text-[7px] xl:text-sm text-right font-light leading-[10px] xl:leading-[18px]">
              بازگشت به داشبورد
            </a>
          </Link>
        )}
      </div>
    </form>
  );
};

export default PaymentResult;
