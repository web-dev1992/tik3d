import Link from "next/link";
import Image from "next/image";
const FourOhFour: React.FC<{}> = () => {
  return (
    <main className="h-screen w-full my-auto flex flex-col lg:flex-row-reverse justify-center items-center ">
      <div className=" w-[300px] h-[225px] lg:w-[600px] lg:h-[450px] xl:w-[800px] xl:h-[600px] relative ">
        <Image src="/images/404-1.gif" alt="404 page" layout="fill" />
      </div>
      <div className="flex flex-col justify-center items-center  w-full lg:w-1/2 ">
        <h1 className="text-lg lg:text-2xl tracking-normal font-bold text-gray-700">
          متاسفیم ، صفحه موردنظر شما یافت نشد!
        </h1>
        <button className="mt-6 flex flex-row justify-center items-center bg-abi px-10 py-2 text-white rounded-lg xl:rounded-2xl">
          <Link href="/">
            <a className="text-white text-base lg:text-lg font-medium">
              بازگشت به صفحه اصلی
            </a>
          </Link>
        </button>
      </div>
    </main>
  );
};
export default FourOhFour;
