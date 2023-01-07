import React, { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import DownloadIcon from "@components/ui/DownloadIcon";
import ReportIcon from "@components/ui/ReportIcon";
import Swal from "sweetalert2";
interface downloadsProps {
  name: string;
  size: string;
  address: string;
}

const Downloads: React.FC<{ downloads: downloadsProps[] }> = ({
  downloads,
}) => {
  const router = useRouter();
  const [showReoprt, setShowReport] = useState(false);
  const reportRef = useRef<HTMLInputElement>(null);
  const showReoprtHandler = () => {
    setShowReport((prev) => !prev);
  };
  const reportSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const reportText = reportRef.current.value;
    try {
      const response = await axios.post("/api/products/report", { reportText });
      Swal.fire({
        title: "اطلاعات",
        text: response.data.message,
        icon: "info",
        confirmButtonText: "باشه!",
      });

      reportRef.current.value = "";
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: error.response.data.message || "خطایی بوجود آمده است!",
        icon: "error",
        confirmButtonText: "فهمیدم!",
      });
    }
  };
  return (
    <div className=" w-full lg:w-[45%]  px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans  gap-2  mt-8 lg:mt-0 ">
      <h2 className="font-bold text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal ">
        بخش دانلود
      </h2>
      <div className="w-full flex flex-col justify-center items-center shadow-[0_4px_21px_rgba(38,78,118,0.08)] text-[9px] text-[#959595] font-medium leading-5 tracking-wide  text-right bg-white rounded-[10px] xl:rounded-[20px] p-6  gap-2 xl:gap-3">
        {downloads.map((download, index) => (
          <div
            key={Math.random() + Math.random() + index}
            className="w-full xl:h-12 bg-[#F7F7F7] group hover:bg-[#0051FF] hover:cursor-pointer  hover:text-white rounded xl:rounded-lg flex flex-row justify-between items-center py-1 px-3"
          >
            <Link href={download.address}>
              <div className="flex text-[#1B1A21] text-[8px] lg:text-xxs xl:text-base xl:leading-6 font-medium gap-1">
                {download.name}
                <span className="text-[#959595] opacity-60 group-hover:text-abiStroke">
                  {download.size} MB
                </span>
              </div>
            </Link>
            <button
              className="hover:text-white"
              onClick={() => {
                router.push(download.address);
              }}
            >
              <DownloadIcon />
            </button>
          </div>
        ))}
        <div className="w-full flex flex-col flex-nowrap justify-center items-center text-[#EB5757] font-IRANSans gap-2">
          <div className="flex flex-row justify-end items-center w-full h-max text-[6px] font-light leading-[9px]">
            <button
              onClick={showReoprtHandler}
              className="flex flex-row flex-nowrap justify-center items-center text-[6px] lg:text-[8px] xl:text-xs gap-1"
            >
              <ReportIcon />
              گزارش خرابی لینک
            </button>
          </div>
          {showReoprt && (
            <form
              onSubmit={reportSubmitHandler}
              className="w-full h-max flex flex-col flex-nowrap justify-center items-center gap-1 xl:gap-2"
            >
              <input
                ref={reportRef}
                type="text"
                placeholder="گزارش خود را بنویسید"
                id="reportInput"
                className="w-full h-6 xl:h-12  text-[#EB5757] placeholder-[#EB5757] text-[8px] lg:text-xxs xl:text-base font-light border border-[#EB5757] rounded xl:rounded-lg px-3 xl:px-[22px]"
              />
              <button className="w-full h-6 xl:h-12 text-white bg-[#EB5757] flex flex-row justify-center items-center  text-[9px] lg:text-xxs xl:text-base font-bold leading-3 rounded xl:rounded-lg">
                ثبت گزارش
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
