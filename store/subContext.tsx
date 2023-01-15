import { useCallback, useContext, useState, useEffect } from "react";
import React from "react";
import { useCookies, Cookies } from "react-cookie";

type contextObj = {
  hasSub: boolean;
  expirationTime: Date;
  setSubHandler: (expirationTime: number) => void;
  removeSubHandler: () => void;
};

const SubContext = React.createContext<contextObj>({
  hasSub: false,
  expirationTime: new Date(0),
  setSubHandler: (expirationTime: number) => {},
  removeSubHandler: () => {},
});

export default function SubProvider(props: { children: JSX.Element }) {
  const [cookie, setCookie, removeCookie] = useCookies(["sub"]);

  const [hasSub, setHasSub] = useState<boolean>(cookie.sub?.hasSub ?? false);
  const [expirationTime, setExpirationTime] = useState<number>(
    cookie.sub?.expireDate ?? 0
  );
  const setSubHandler = useCallback((expireDate: number) => {
    console.log("expireDate===>", expireDate);
    console.log("new Date().getTime()====>", new Date().getTime());
    setHasSub(true);
    setExpirationTime(expireDate);
    console.log(
      "expireDate - new Date().getTime()====>",
      expireDate - new Date().getTime()
    );
    const sub = { hasSub: true, expireDate: expireDate };
    setCookie("sub", JSON.stringify(sub), {
      path: "/",
      maxAge: expireDate - new Date().getTime(),
      // domain:'http://localhost/3000',
      // httpOnly: true,
      sameSite: true,
    });
  }, []);
  const removeSubHandler = useCallback(() => {
    setHasSub(false);
    setExpirationTime(0);

    removeCookie("sub", {
      path: "/",
      // maxAge: expirationTime - new Date().getTime(),
      // domain:'http://localhost/3000',
      // httpOnly: true,
      sameSite: true,
    });
  }, []);

  let subContext = {
    hasSub: hasSub,
    expirationTime: new Date(expirationTime),
    setSubHandler: setSubHandler,
    removeSubHandler: removeSubHandler,
  };

  return (
    <SubContext.Provider value={subContext}>
      {props.children}
    </SubContext.Provider>
  );
}

export function useSubContext() {
  return useContext(SubContext);
}
