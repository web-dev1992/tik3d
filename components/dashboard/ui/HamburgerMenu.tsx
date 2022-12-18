import { useRef, useEffect, useState, ReactNode, Fragment } from "react";
import { createPortal } from "react-dom";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageDropDown from "../../layout/LanguageDropDown";

type menuItem = { href: string; label: string };
interface MenuProps {
  className: string;
  menuItems: menuItem[];
  logOutHandler: () => void;
}

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed w-full h-full top-0 right-0 z-10 flex flex-row justify-start bg-[rgba(26,21,56,0.7)] backdrop-blur-sm"
    />
  );
};
const ModalOerlay = (props) => {
  return (
    <Fragment>
      {/* <!-- list --> */}
      <div
        className="z-20 flex flex-col w-60 px-8  blur-none overflow-y-scroll h-full max-h-full fixed right-0 top-0"
        style={{
          background: "linear-gradient(230deg, #39AFFD -0.23%, #477FFF 100%)",
        }}
      >
        <div className="flex flex-row flex-nowrap justify-between items-center my-[52px]">
          <Image
            src="/images/dashboard-logo.png"
            alt="dashboard-logo"
            width={87}
            height={34}
          />
          <div style={{ direction: "ltr" }}>
            <LanguageDropDown
              className="w-7 h-[18px] flex relative"
              showLabel={false}
            />
          </div>
        </div>
        <ul className="list-none flex flex-col justify-center items-start  w-full text-center align-middle text-base font-normal text-white font-IRANSans divide-y divide-[#61A0F3]">
          {props.menuItems.map((item) => (
            <li
              key={item.label}
              className="w-full h-16 flex flex-row justify-start items-center "
            >
              <Link href={item.href}>
                <a className="text-white text-right w-full ">{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col flex-nowrap justify-center items-center mt-60 font-IRANSans gap-3.5">
          <button className="w-[77px] h-[30px] border border-white text-white rounded-lg text-[8px] font-bold leading-3">
            دانلود رایگان
          </button>
          <div className="flex flex-row flex-nowrap justify-center items-center gap-2">
            <MenuButton onClick={props.logOutHandler}>
              <Image src="/images/exit.png" alt="exit" width={15} height={15} />
            </MenuButton>
            <MenuButton>
              <Image
                src="/images/setting.png"
                alt="exit"
                width={15}
                height={15}
              />
            </MenuButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const MenuButton: React.FC<{ children: ReactNode; onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="w-9 h-9 rounded-xl flex flex-row justify-center items-center "
      onClick={onClick}
      style={{
        background:
          "linear-gradient(126deg, rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      {children}
    </button>
  );
};
const HamburgerMenu = (props: MenuProps) => {
  const { menuItems, className, logOutHandler } = props;
  const [showHambugerMenu, setShowHambergerMenu] = useState<boolean>(false);
  const backdropRef = useRef<Element | null>(null);
  const overlayRef = useRef<Element | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    backdropRef.current = document.querySelector<HTMLElement>("#backdrop-root");
    overlayRef.current = document.querySelector<HTMLElement>("#overlay-root");

    setMounted(true);
  }, []);
  const hamburgerMenuHandler = (): void => {
    if (showHambugerMenu) {
      setShowHambergerMenu(false);
    }
  };
  const openCloseHamburgerMenu = () => {
    setShowHambergerMenu(true);
  };

  return (
    <Fragment>
      <button onClick={openCloseHamburgerMenu} type="button">
        <svg
          className="h-8 w-6"
          viewBox="0 0 24 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28307 19.0688L20 19.0688M19.9996 12.0688L4 12.0688M20 5.06885L12.9719 5.06885"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {mounted && backdropRef.current && overlayRef && showHambugerMenu && (
        <Fragment>
          {createPortal(
            <Backdrop onClick={hamburgerMenuHandler} />,
            backdropRef.current
          )}
          {createPortal(
            <ModalOerlay menuItems={menuItems} logOutHandler={logOutHandler} />,
            overlayRef.current
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default HamburgerMenu;
