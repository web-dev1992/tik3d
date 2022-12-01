import { PropsWithChildren, useEffect, useRef } from "react";
type Props = PropsWithChildren<{
  operator: () => void;
  className:string
}>;
 const OutsideLayout: React.FC<Props> = ({ children, operator ,className}) => {
  const wrapperRef = useRef<HTMLDivElement | EventTarget | null | any>(null);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        operator && operator();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, operator]);
  return <div ref={wrapperRef} className={className} >{children}</div>;
};
export default OutsideLayout;