const PauseIcon:React.FC<{className:string}> = ({className}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.11856 0.362305H0.890625V16.9749H7.11856V0.362305ZM16.4605 0.362305H10.2326V16.9749H16.4605V0.362305Z"
        fill="#E6E6E6"
      />
    </svg>
  );
};

export default PauseIcon;
