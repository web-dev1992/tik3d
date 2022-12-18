const ContentTitle: React.FC<{ title: String }> = ({ title }) => {
  return (
    <h2 className="w-full font-bold text-base xl:text-2xl tracking-normal text-right text-[#11282E] leading-[55px] lg:leading-[34px] xl:leading-[55px] ">
      {title}
    </h2>
  );
};

export default ContentTitle;
