import { Fragment } from "react";
import { signOut, getSession } from "next-auth/react";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import DesktopMainHeader from "./DesktopMainHeader";
import XlargMainHeader from "./XlargMainHeader";
import { useRouter } from "next/router";
import { useSubContext } from "store/subContext";
import ProductMobileMainHeader from "./ProductMobileMainHeader";
const ProductHeader = () => {
  const subCtx = useSubContext();
  const router = useRouter();
  const menuItems = [
    { label: "صفحه نخست", href: "/" },
    { label: "دانلود رایگان", href: "/downloads" },
    { label: "ویديوها", href: "/products/videos" },
    { label: "تصاویر", href: "/products/images" },
    { label: "صوت ها", href: "/products/audios" },
  ];
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedSession, setLoadedSession] = useState<Session>(null);
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setIsLoading(false);
        setLoadedSession(session);
      } else {
        setIsLoading(true);
        setLoadedSession(null);
      }
    });
  }, []);
  function logOutHandler() {
    subCtx.removeSubHandler();
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
      <div className="w-full bg-[#F6F8FB] xl:px-72 lg:px-44 px-[22px] m-auto">
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
