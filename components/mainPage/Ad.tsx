import Image from "next/image";
import Link from "next/link";

const Ad = () => {
  return (
    <div className="w-[330px] md:w-[570px] xl:w-[917px] my-10 m-auto h-fit flex flex-col flex-nowrap justify-center items-center gap-4 ">
      <Link href="/ads" passHref>
        <a>
          <Image
            src="/images/ad-banner.png"
            alt="ad"
            width={917}
            height={163}
          />
        </a>
      </Link>
      <Link href="/ads" passHref>
        <a>
          <Image
            src="/images/ad-banner.png"
            alt="ad"
            width={917}
            height={163}
          />
        </a>
      </Link>
    </div>
  );
};

export default Ad;
