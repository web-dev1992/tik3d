import React from "react";
import Image from "next/dist/client/image";
class ErrorBoundary extends React.Component<
  { children },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <main
          className="bg-[#FF0099] bg-gradient-to-r from-[#FF0099] to-[#493240]
      w-full h-screen flex flex-col flex-nowrap justify-center items-center  p-10 font-IRANSans"
        >
          <Image src="/images/500 error.png" width={600} height={408} />
          <h1 className="text-right text-2xl xl:text-3xl  font-bold leading-[47px] tracking-tight text-white my-4">
            متاسفیم‌؛ خطایی در سمت سرور رخ داده است!
          </h1>
          <p className="text-xxs  lg:text-base xl:text-lg xl:leading-7 font-normal text-right leading-4 tracking-wide text-white">
            ما در حال برطرف کردن مشکل پیش آمده هستیم، لطفا در یک زمان دیگر
            درخواست خود را امتحان کنید.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            تلاش مجدد؟
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
