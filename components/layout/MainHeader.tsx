import { signOut, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import MobileMainHeader from "./MobileMainHeader";
import DesktopMainHeader from "./DesktopMainHeader";
import XlargMainHeader from "./XlargMainHeader";
import { useRouter } from "next/router";
import { Session } from "next-auth";
import { useSubContext } from "store/subContext";
const menuItems = [
  { label: "صفحه نخست", href: "/" },
  { label: "دانلود رایگان", href: "/downloads" },
  { label: "محصولات", href: "/products" },
  { label: "تماس با ما", href: "/contact-us" },
  { label: "درباره ما", href: "/about-us" },
];

const MainHeader = () => {
  const subCtx=useSubContext();
  const router = useRouter();
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
      ? { label: "داشبورد", href: `/dashboard` }
      : { label: "ورود/ ثبت نام", href: "/user-account/login" };
  return (
    <div className="w-full bg-[#F6F8FB]">
      {/* Mobile Header */}
      <MobileMainHeader
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
  );
};
export default MainHeader;
