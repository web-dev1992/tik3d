import { Fragment, useState } from "react";
import SettingsIcon from "@components/ui/PlayerComponents/Controls/SettingsIcon";

const MenuItem: React.FC<{
  handleMenu: () => void;
  href: string;
  label: string;
}> = ({ handleMenu, href, label }) => {
  return (
    <li onClick={handleMenu}>
      <a
        href={href}
        className="flex justify-center items-center text-[6px] lg:text-[8px] xl:text-xxs leading-3 py-1 px-2 hover:bg-gray-100 "
      >
        {label}
      </a>
    </li>
  );
};
const SettingsMenu: React.FC<{ changeRate: (rate) => void }> = ({
  changeRate,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showRateMenu, setShowRateMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu((prev) => !prev);
    setShowRateMenu(false);
  };
  return (
    <Fragment>
      <button
        id="multiLevelDropdownButton"
        data-dropdown-toggle="dropdown"
        className=" inline-flex items-center relative"
        type="button"
        onClick={handleMenu}
      >
        <SettingsIcon className=" h-2.5 w-2.5 lg:h-3 lg:w-3 xl:h-5 xl:w-5" />
      </button>
      {/*  Dropdown menu  */}
      <div
        id="dropdown"
        className={`${
          showMenu ? "visible" : "hidden"
        } z-70 w-14 lg:w-[72px] xl:w-24 bg-white rounded divide-y divide-gray-100 shadow absolute bottom-0 left-3 xl:left-6`}
      >
        <ul
          className="py-1 text-[6px] lg:text-[8px] xl:text-xxs text-gray-700 "
          aria-labelledby="multiLevelDropdownButton"
        >
          <MenuItem href="#" label=" دانلود ویديو" handleMenu={handleMenu} />

          <li>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="doubleDropdown"
              data-dropdown-placement="right-start"
              type="button"
              className="flex justify-center items-center py-1 px-2 w-full hover:bg-gray-100 relative"
              onClick={() => setShowRateMenu((prev) => !prev)}
            >
              سرعت پخش
              <svg
                aria-hidden="true"
                className="w-2 h-2 xl:w-4 xl:h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="doubleDropdown"
              className={`${
                showRateMenu ? "visible" : "hidden"
              } z-80 w-8 lg:w-10 xl:w-12 bg-white rounded divide-y divide-gray-100 shadow absolute  bottom-8 left-[58px] lg:left-[72px] xl:bottom-12 xl:left-[100px] `}
            >
              <ul
                className="py-1 text-[6px] lg:text-[8px] xl:text-xxs text-gray-700 "
                aria-labelledby="doubleDropdownButton"
              >
                {[0.5, 1.0, 1.5, 2.0].map((rate) => (
                  <li onClick={handleMenu} key={rate}>
                    <a
                      onClick={() => changeRate(rate)}
                      href="#"
                      className="flex justify-center items-center text-[6px] lg:text-[8px] xl:text-xxs leading-3 py-1 px-2 hover:bg-gray-100"
                    >
                      {rate} X
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <MenuItem href="#" label="تصویر در تصویر" handleMenu={handleMenu} />

          <MenuItem href="#" label="زیرنویس" handleMenu={handleMenu} />
        </ul>
      </div>
    </Fragment>
  );
};

export default SettingsMenu;
