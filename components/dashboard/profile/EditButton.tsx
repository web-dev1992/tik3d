import EditIcon from "@components/ui/EditIcon";
const EditButton: React.FC<{ editModeHandler: () => void }> = ({
    editModeHandler,
  }) => {
    return (
      <button
        className="flex flex-row flex-nowrap justify-end items-center text-[#4096FE] text-[8px] xl:text-xs xl:leading-[18px] font-light leading-3 text-left gap-[2px]"
        onClick={editModeHandler}
      >
        <EditIcon />
        <span>ویرایش</span>
      </button>
    );
  };
 
export default EditButton;