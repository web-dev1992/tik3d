import { Fragment, useState } from "react";
import Link from 'next/link';
interface item {
  id: string;
  name: string;
  items: {
    id: string;
    name: string;
  }[];
}
const RightPanelItem: React.FC<{ item: item }> = ({ item }) => {
  const [openList, setOpenList] = useState(true);
  function openCloseList(id: string) {
    setOpenList((prev) => !prev);
  }
  return (
    <Fragment>
      <button
        style={{ direction: "ltr" }}
        key={item.id}
        className="w-full h-8 py-1 flex flex-row flex-nowrap  items-center justify-end  gap-1 font-semibold text-white text-[11px] xl:text-lg leading-5 xl:leading-8 text-right cursor-default pr-1.5 xl:pr-3"
        onClick={() => {
          openCloseList(item.id);
        }}
        type="button"
      >
        <span>{item.name}</span>
        <svg
          className="w-2 h-2 xl:w-3 xl:h-3"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.71172" cy="4.02178" r="3.73125" fill="#E0E0E0" />
        </svg>
      </button>
      <ul
        className={`list-disc list-inside z-20 flex flex-col justify-center w-full text-[11px] font-light overflow-hidden ${
          openList ? "h-16 max-h-16 xl:h-24 xl:max-h-24" : "h-0 max-h-0 "
        }`}
      >
        {item.items.map((i) => (
          <li
            className="w-full text-abiStroke leading-5 pr-4 text-md xl:pr-7 xl:text-xl"
            key={i.id}
          >
            <Link href="#"><a className="text-white text-xs xl:text-lg xl:font-light xl:leading-7 cursor-pointer relative left-1 top-0  xl:-top-1">{i.name}</a></Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default RightPanelItem;
