import Link from "next/link";

const CustomeLink: React.FC<{
  href: string;
  className?: string;
  text?: string;
}> = ({
  href,
  className = "text-[#2D9CDB] text-[7px] xl:text-xs text-right font-light leading-[10px] xl:leading-[18px]",
  text,
}) => {
  return (
    <Link href={href}>
      <a className={className}>{text}</a>
    </Link>
  );
};

export default CustomeLink;
