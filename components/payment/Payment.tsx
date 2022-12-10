import { FormEvent, Fragment, useState } from "react";
import TermsAndConditionsBox from "@components/userAccounts/ui/TermsAndConditionsBox";
import TermsConditions from "@components/layout/TermsAndConditions";
import CustomeLink from "@components/userAccounts/ui/CustomeLink";
import PaymentMethodDropdown from "@components/payment/PaymentMethodDropdown";
import PaymentResult from "@components/payment/PaymentResult";
import FormTitle from "@components/layout/FormTitle";
import PaymentLayout from "./PaymentLayout";
import ErrorMessage from "@components/layout/ErrorMessage";
import SubmitButton from "@components/layout/SubmitButton";
const subscriptionInfo = {
  id: "s1",
  month: 3,
  price: "40,000",
};
const Payment = () => {
  const [acceptLaw, setAcceptLaw] = useState<boolean>(false);
  const [showConditions, setShowConditions] = useState<boolean>(false);
  const [acceptLawError, setAcceptLawError] = useState<string>(
    "لطفا با قوانین tik3d موافقت نمایید"
  );
  const [isPaymentSuccessful, setIsPaymentSuccessful] =
    useState<boolean>(false);
  const [isPaymentDone, setIsPaymentDone] = useState<boolean>(false);
  const err = true;
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
  const submitPaymentHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <PaymentLayout>
      {showConditions && (
        <TermsConditions closeConditionsHandler={closeConditionsHandler} />
      )}
      {isPaymentDone ? (
        <PaymentResult isPaymentSuccessful={isPaymentSuccessful} />
      ) : (
        <Fragment>
          <FormTitle>خرید اشتراک</FormTitle>
          <div className="flex flex-col flex-nowrap gap-[2px] w-full justify-center items-center ">
            <p className="w-full text-center text-[#CACACA] text-xxs lg:text-[11px] xl:text-lg font-normal leading-6">
              اشتراک ویژه {subscriptionInfo.month} ماهه
            </p>
            <p className="w-full text-center text-[#4F96FF] text-[21px] xl:text-4xl lg:text-[23px] font-bold leading-6 tracking-wide">
              {subscriptionInfo.price} تومان
            </p>
          </div>
          <form
            className="w-[232px] lg:w-[249px] xl:w-[402px] flex flex-col flex-nowrap justify-center items-center gap-6 mx-12 mb-14 "
            onSubmit={submitPaymentHandler}
          >
            <PaymentMethodDropdown className="mt-[30px]  flex flex-row flex-nowrap w-full   h-8 lg:h-[34px] xl:h-14 relative" />
            <div className="relative w-full flex flex-col flex-nowrap justify-center items-center gap-3 xl:gap-5">
              <input
                type="text"
                name="discount-code"
                placeholder=""
                size={20}
                className="PaymentInput "
              />
              <span className="absolute top-2.5 lg:top-3.5 xl:top-5 right-2 text-[7px] xl:text-xs text-[#333333] leading-[10px] xl:leading-[18px] font-light">
                کد تخفیف:
              </span>
              {err && (
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
