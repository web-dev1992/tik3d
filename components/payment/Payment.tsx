import { FormEvent, Fragment, useState, useRef } from "react";
import TermsAndConditionsBox from "@components/userAccounts/ui/TermsAndConditionsBox";
import TermsConditions from "@components/layout/TermsAndConditions";
import CustomeLink from "@components/userAccounts/ui/CustomeLink";
import PaymentMethodDropdown from "@components/payment/PaymentMethodDropdown";
import PaymentResult from "@components/payment/PaymentResult";
import FormTitle from "@components/layout/FormTitle";
import PaymentLayout from "./PaymentLayout";
import ErrorMessage from "@components/layout/ErrorMessage";
import SubmitButton from "@components/layout/SubmitButton";
import { ObjectId } from "mongodb";
import axios from "axios";
import numbersWithCommas from "helper/numbersWithCommas";
interface PaymentProps {
  subscription?: {
    _id: ObjectId;
    month: number;
    price: number;
    description: string;
    isActive: boolean;
  };
  userId: string;
}
const Payment = (props: PaymentProps) => {
  const discountRef = useRef<HTMLInputElement>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("online");
  const [discount, setDiscount] = useState<{
    code: string;
    discountedPrice: number;
    percent: number;
  }>(null);
  const [discountError, setDiscountError] = useState<boolean>(false);
  const [acceptLaw, setAcceptLaw] = useState<boolean>(false);
  const [showConditions, setShowConditions] = useState<boolean>(false);
  const [acceptLawError, setAcceptLawError] = useState<string>(
    "لطفا با قوانین tik3d موافقت نمایید"
  );
  const [isPaymentSuccessful, setIsPaymentSuccessful] =
    useState<boolean>(false);
  const [isPaymentDone, setIsPaymentDone] = useState<boolean>(false);
  const acceptLawHandler = () => {
    setAcceptLaw((prev) => !prev);
    !acceptLaw
      ? setAcceptLawError("")
      : setAcceptLawError("لطفا با قوانین tik3d موافقت نمایید");
  };

  const openConditionsHandler = () => {
    setShowConditions(true);
  };
  const closeConditionsHandler = () => {
    setShowConditions(false);
  };
  const submitPaymentHandler = async (event: FormEvent) => {
    event.preventDefault();
    const data = {
      subId: props.subscription._id,
      amount: props.subscription.price,
      paid: discount?.discountedPrice ?? props.subscription.price,
      discount: discount?.percent ?? "",
      month: props.subscription.month,
      description: `اشتراک ${props.subscription.month} ماهه ، پرداخت ${paymentMethod} `,
    };
    try {
      const result = await axios.post(`/api/payments/${props.userId}`, data);
      if (discount !== null) {
        const res2 = await axios.post(
          `/api/discounts/userDiscounts/${props.userId}/${discount.code}`
        );
        setDiscount(null);
      }

      setIsPaymentDone(true);
      setIsPaymentSuccessful(true);
      alert(result.data.message);
    } catch (err) {
      // if (err.response.status === 422) {
      //   console.log(err.response.data.message);
      //   setDiscountError(false);
      //   setDiscount(null);
      // }else
      alert(err.message || "خطایی بوجود آمده است.");
    }
  };
  const discountHandler = async () => {
    const code = discountRef.current.value;
    if (code === "") {
      setDiscount(null);
      return;
    }
    try {
      const userDiscount = await axios(
        `/api/discounts/userDiscounts/${props.userId}/${code}`
      );
      if (userDiscount.data.hasDiscountUsed === true) {
        alert("شما قبلا از این کد تخفیف استفاده کرده اید!");
        return;
      }
      const result = await axios(`/api/discounts/${code}`);
      if (result.status === 201) {
        setDiscount({
          code: code,
          percent: result.data.discount.percent,
          discountedPrice:
            props.subscription.price -
            (result.data.discount.percent * props.subscription.price) / 100,
        });
        setDiscountError(false);
      }
    } catch (err) {
      if (err.response.status === 404) {
        console.log(err.response.data.message);
        setDiscountError(true);
        setDiscount(null);
      } else alert(err.message || "خطایی بوجود آمده است.");
    }
  };
  return (
    <PaymentLayout>
      {showConditions && (
        <TermsConditions closeConditionsHandler={closeConditionsHandler} />
      )}
      {isPaymentDone ? (
        <PaymentResult
          isPaymentSuccessful={isPaymentSuccessful}
          setIsPaymentDone={setIsPaymentDone}
        />
      ) : (
        <Fragment>
          <FormTitle>خرید اشتراک</FormTitle>
          <div className="flex flex-col flex-nowrap gap-[2px] w-full justify-center items-center ">
            <p className="w-full text-center text-[#CACACA] text-xxs lg:text-[11px] xl:text-lg font-normal leading-6">
              اشتراک ویژه {props.subscription.month} ماهه
            </p>
            <p className="w-full text-center text-[#4F96FF] text-[21px] xl:text-4xl lg:text-[23px] font-bold leading-6 tracking-wide">
              {discount !== null && !discountError
                ? numbersWithCommas(discount.discountedPrice)
                : numbersWithCommas(props.subscription.price)}
              تومان
            </p>
          </div>
          <form
            className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-6 mx-12 mb-14 "
            onSubmit={submitPaymentHandler}
          >
            <PaymentMethodDropdown
              setPaymentMethod={setPaymentMethod}
              className="mt-[30px]  flex flex-row flex-nowrap w-full   h-8 lg:h-[34px] xl:h-14 relative"
            />
            <div className="relative w-full flex flex-col flex-nowrap justify-center items-center gap-3 xl:gap-5">
              <input
                ref={discountRef}
                type="text"
                name="discount-code"
                placeholder=""
                required={false}
                size={20}
                className="PaymentInput"
                onChange={discountHandler}
              />
              <span className="absolute top-2.5 lg:top-3.5 xl:top-5 right-2 text-[7px] xl:text-xs text-[#333333] leading-[10px] xl:leading-[18px] font-light">
                کد تخفیف:
              </span>
              {discountError && (
                <ErrorMessage message="کد تخفیف وارد شده اشتباه است یا قبلا استفاده شده است." />
              )}
              <div className="w-full flex flex-col gap-1 xl:gap-1.5 flex-nowrap justify-center items-start">
                <TermsAndConditionsBox
                  acceptLaw={acceptLaw}
                  acceptLawError={acceptLawError}
                  acceptLawHandler={acceptLawHandler}
                  openConditionsHandler={openConditionsHandler}
                />
                {acceptLawError && <ErrorMessage message={acceptLawError} />}
              </div>
              <SubmitButton text="پرداخت" />
              <span className="w-full justify-start">
                <CustomeLink href="/contact-us" text="به کمک نیاز دارید؟" />
              </span>
            </div>
          </form>
        </Fragment>
      )}
    </PaymentLayout>
  );
};

export default Payment;
