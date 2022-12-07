import { useRouter } from "next/router";

const CardButton: React.FC<{ link: string }> = ({ link }) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <button
        className="w-12 h-3.5 xl:w-[87px] xl:h-[22px] bg-abi rounded flex flex-row justify-center items-center text-white font-normal text-[6px] leading-[10px]  xl:text-[10px] xl:leading-[15px] "
        type="button"
        onClick={() => {
          router.push(link);
        }}
      >
        مشاهده و دانلود
      </button>
    </div>
  );
};

export default CardButton;
