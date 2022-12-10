import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className=" bg-white grid w-[317px] sm:w-9/12 lg:w-[870px] xl:w-11/12 mx-8  h-max gap-3 m-auto mt-11 xl:mt-[71px] justify-center items-center ">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 ">
        <Link href="/images">
          <Image
            src="/images/tasavir.png"
            alt="images"
            width={254}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 ">
        <Link href="/background">
          <Image
            src="/images/paszamine.png"
            alt="background"
            width={254}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-3 col-end-4 row-start-1 row-end-2 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3">
        <Link href="/hdr">
          <Image
            src="/images/hdr.png"
            alt="hdr"
            width={254}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3">
        <Link href="/fotage">
          <Image
            src="/images/fotage.png"
            alt="fotage"
            width={254}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-2 col-end-4 row-start-2 row-end-3 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2">
        <Link href="/models">
          <Image
            src="/images/model.png"
            alt="model"
            width={528}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-1 col-end-3 row-start-3 row-end-4 lg:col-start-4 lg:col-end-6 lg:row-start-3 lg:row-end-4">
        <Link href="/aftereffect">
          <Image
            src="/images/aftereffect.png"
            alt="aftereffect"
            width={528}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-3 col-end-4 row-start-3 row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4">
        <Link href="/effects">
          <Image
            src="/images/effect.png"
            alt="effect"
            width={254}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-1 col-end-2 row-start-4 row-end-5 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3">
        <Link href="/musics">
          <Image
            src="/images/mosighi.png"
            alt="music"
            width={254}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-2 col-end-4 row-start-4 row-end-5 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4">
        <Link href="/autocad">
          <Image
            src="/images/autocad.png"
            alt="autocad"
            width={528}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-1 col-end-3 row-start-5 row-end-6 lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3">
        <Link href="/material">
          <Image
            src="/images/material.png"
            alt="material"
            width={528}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-start-3 col-end-4 row-start-5 row-end-6 lg:col-start-5 lg:col-end-6 lg:row-start-1 lg:row-end-2">
        <Link href="/texture">
          <Image
            src="/images/texture.png"
            alt="texture"
            width={254}
            height={261}
            objectFit="contain"
          />
        </Link>
      </div>
    </div>
  );
};
export default Services;
