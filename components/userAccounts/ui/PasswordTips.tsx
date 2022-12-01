import CancelIcon from "@components/ui/CancelIcon";
import HideBoxIcon from "@components/ui/HideBoxIcon";
import SuccessTikIcon from "@components/ui/SuccessTikIcon";

const PasswordTips: React.FC<{
  showTipHandler: (state) => void;
  tips: string[];
  verify: {trueLength:boolean;  hasNumber:boolean, hasSpecial:boolean};
}> = ({ showTipHandler, tips, verify }) => {
  return (
    <div className="z-10 absolute top-0 -right-[68px] lg:-right-[270px] w-16 lg:w-[264px] lg:h-28 h-12 flex flex-row flex-nowrap justify-center items-start gap-[1px] ">
      <div className="w-[60px] lg:w-[257px] h-full shadow-[0_3px_18px_rgba(0,0,0,0.2)] lg:shadow-[0_10px_50px_rgba(0,0,0,0.2)] flex flex-col flex-nowrap justify-center items-start lg:gap-3  text-[5px] lg:text-xs text-[#BDBDBD] font-light bg-white rounded-sm py-2 px-1 lg:px-2">
        <span className="flex flex-row flex-nowrap justify-start items-center gap-[3px] lg:gap-2">
          <span>
            {verify.trueLength ? <SuccessTikIcon className="w-1 h-1 xl:w-3 xl:h-[9px]" />: <CancelIcon className="w-1 h-1 xl:w-2.5 xl:h-2.5" />}           
          </span>
          {tips[0]}
        </span>
        <span className="flex flex-row flex-nowrap justify-start items-center gap-[3px] lg:gap-2">
          <span>
          {verify.hasNumber ? <SuccessTikIcon className="w-1 h-1 xl:w-3 xl:h-[9px]" />: <CancelIcon className="w-1 h-1 xl:w-2.5 xl:h-2.5" />} 
          </span>
          {tips[1]}
        </span>
        <span className="flex flex-row flex-nowrap justify-start items-start lg:items-center gap-[3px] lg:gap-2">
          <span>
          {verify.hasSpecial ? <SuccessTikIcon className="w-1 h-1 xl:w-3 xl:h-[9px]" />: <CancelIcon className="w-1 h-1 xl:w-2.5 xl:h-2.5" />} 
          </span>
          {tips[2]}
        </span>
      </div>
      <button onClick={showTipHandler.bind(this, false)}>
        <HideBoxIcon />
      </button>
    </div>
  );
};

export default PasswordTips;
