const CardItemName: React.FC<{ itemName: string }> = ({ itemName }) => {
  return (
    <p
      style={{ direction: "rtl" }}
      className=" pr-1 xl:pr-2 w-full flex flex-row justify-start text-right text-[7px] font-medium text-[#1B1A21] leading-[11px] xl:text-xs"
    >
      {itemName}
    </p>
  );
};

export default CardItemName;
