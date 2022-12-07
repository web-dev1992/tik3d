interface introProps {
  id: string;
  fileAddress?: string;
  name: string;
  renderMotorName: string;
  version: string;
  style: string;
  ManufacturerSite: string;
  tags: string[];
}

const Introduction: React.FC<{ introProps: introProps }> = ({ introProps }) => {
  return (
    <div className="w-full px-3 flex flex-col flex-nowrap justify-center items-start font-IRANSans text-[#0F2137] gap-6 xl:gap-12">
      <IntroTitle name={introProps.name} />
      <div className="w-full flex flex-col flex-nowrap font-medium opacity-60 bg-[rgba(234,234,234,0.4)] rounded-md px-3 xl:px-6 divide-y divide-[#F0F0F0] ">
        <IntroItem label="موتور رندر" value={introProps.renderMotorName} />

        <IntroItem label="ورژن" value={introProps.version} />

        <IntroItem label="سبک" value={introProps.style} />

        <IntroItem label="سایت سازنده" value={introProps.ManufacturerSite} />
      </div>
      <div className="w-full flex flex-col flex-nowrap font-medium opacity-60 bg-[rgba(234,234,234,0.4)] font-IRANSans text-[#0F2137] rounded-md px-3 py-4">
        <div className="w-full flex flex-row justify-start items-center h-max lg:pt-2 lg:pb-9 xl:pt-7 xl:pb-12 gap-4">
          <div className="w-max h-full text-[11px] xl:text-lg pr-3 ">
            تگ ها:
          </div>
          <div className="w-9/12 xl:w-10/12 h-full text-right text-xxs xl:text-[13px] text-[#4F96FF]">
            {introProps.tags.map((tag, index) => (
              <>
                <span key={index} className=" tex-[8px] font-medium leading-3">
                  {tag}
                </span>
                <span> ،&nbsp;</span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const IntroItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="w-full h-14 xl:h-24 flex flex-row flex-nowrap items-center ">
      <div className="w-1/2 text-right text-[11px] xl:text-lg ">{label}:</div>
      <div className="w-1/2 text-left text-xxs xl:text-base text-[#535353] ">
        {value}
      </div>
    </div>
  );
};
const IntroTitle: React.FC<{ name }> = ({ name }) => {
  return (
    <h2 className="font-bold text-xl lg:text-[22px] xl:text-4xl lg:tracking-tight  text-right text-[#0F2137] tracking-normal -mb-1 lg:mb-0">
      {name}
    </h2>
  );
};
export default Introduction;
