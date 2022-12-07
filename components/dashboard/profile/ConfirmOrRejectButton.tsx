import CancelIcon from "@components/ui/CancelIcon";
import ConfirmIcon from "@components/ui/ConfirmIcon";


const ConfirmOrRejectButton: React.FC<{ editModeHandler: () => void }> = ({
    editModeHandler,
  }) => {
    return (
      <div className="flex flex-row flex-nowrap justify-end items-center gap-2">
        <button
          className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
          onClick={editModeHandler}
        >
          <ConfirmIcon />
          <span>تایید </span>
        </button>
        <button
          className="flex flex-row flex-nowrap justify-end items-center text-[#EB5757] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
          onClick={editModeHandler}
        >
          <CancelIcon className="w-[7px] h-1.5 xl:w-2 xl:h-2" />
          <span>انصراف</span>
        </button>
      </div>
    );
  };
 
export default ConfirmOrRejectButton;