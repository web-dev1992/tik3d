import ProductDropdown from "@components/ui/ProductDropdown";
import RightPanelItem from "@components/ui/RightPanelItem";

const ProductsSidebar: React.FC<{ panelList }> = ({ panelList }) => {
  return (
    <div className="hidden lg:flex flex-col  flex-nowrap w-4/10 font-IRANSans gap-5 xl:gap-10 ">
      <div className="w-full flex flex-row flex-nowrap  justify-center items-start gap-2 ">
        <div>
          <button className="flex flex-row justify-center items-center rounded-[3px] w-[71px] h-9 xl:w-[115px] xl:h-14 xl:text-base xl:leading-6 xl:rounded-[5px] bg-abi text-white text-xxs leading-4 font-bold">
            آیتم های رایگان
          </button>
        </div>
        <div>
          <div className="w-full h-max relative ">
            <ProductDropdown
              className="w-full h-full text-[9px] font-normal relative"
              selectItems={["جدیدترین ها", "پربازدیدترین ها", "قدیمی ترین ها"]}
              label="دسته بندی بر اساس:جدیدترین ها"
            />
          </div>
        </div>
      </div>
      <div className="w-[243px] h-[482px] xl:w-[390px] xl:h-[776px] bg-[#2F80ED] px-2 shadow-[0_0_37px_-3px_#2F80ED] rounded-lg flex flex-col flex-nowrap items-start gap-4">
        <div className="w-full h-max flex flex-row justify-center items-center relative pt-4">
          <ProductDropdown
            className="h-full text-[11px] font-normal relative"
            selectItems={["مدل های سه بعدی ", "مدل های دو بعدی"]}
            label="مدل های سه بعدی"
          />
        </div>
        {/* TreeList */}
        <div className="w-full flex flex-col flex-nowrap justify-start items-start font-IRANSans overflow-auto ">
          <p className="text-abiStroke font-noraml text-[9px] xl:text-sm leading-5 text-right pr-6">
            زیر مجموعه های این دسته:
          </p>
          <div className="overflow-scroll scrollbar-thin  scrollbar-thumb-white scrollbar-track-[#2D9CDB] w-full">
            {panelList.map((item) => (
              <RightPanelItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSidebar;
