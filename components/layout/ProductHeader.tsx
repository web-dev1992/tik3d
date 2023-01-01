import { Fragment } from "react";
import { signOut, getSession } from "next-auth/react";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import DesktopMainHeader from "./DesktopMainHeader";
import XlargMainHeader from "./XlargMainHeader";
import { useRouter } from "next/router";

import ProductMobileMainHeader from "./ProductMobileMainHeader";
const ProductHeader = () => {
  const router = useRouter();
  const menuItems = [
    { label: "صفحه نخست", href: "/" },
    { label: "دانلود رایگان", href: "/downloads" },
    { label: "محصولات", href: "/products/images" },
    { label: "تماس با ما", href: "/contact-us" },
    { label: "درباره ما", href: "/about-us" },
  ];
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedSession, setLoadedSession] = useState<Session>(null);
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        console.log(session);
        setIsLoading(false);
        setLoadedSession(session);
      } else {
        setIsLoading(true);
        setLoadedSession(null);
      }
    });
  }, []);
  function logOutHandler() {
    signOut();
  }
  function SearchHandler(searchKey: string) {
    router.push(`/products/search/${searchKey}`);
  }
  const firstItem =
    !isLoading && loadedSession
      ? { label: "داشبورد", href: "/dashboard" }
      : { label: "ورود/ ثبت نام", href: "/user-account/login" };
  return (
    <Fragment>
      <div className="w-full bg-[#F6F8FB] ">
        {/* Mobile Header */}
        <ProductMobileMainHeader
          Items={[firstItem, ...menuItems]}
          searchHandler={SearchHandler}
        />
        {/*Desktop  Header */}
        <DesktopMainHeader
          Items={[firstItem, ...menuItems]}
          session={loadedSession}
          isLoading={isLoading}
          logOutHandler={logOutHandler}
          searchHandler={SearchHandler}
        />
        {/* Xlarg Desktop Header */}
        <XlargMainHeader
          Items={menuItems}
          session={loadedSession}
          isLoading={isLoading}
          logOutHandler={logOutHandler}
          searchHandler={SearchHandler}
        />
      </div>
    </Fragment>
  );
};
export default ProductHeader;
