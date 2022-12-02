const SortIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 23 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.08997 1.40625H21.848H1.08997Z" fill="#6F6F6F" />
      <path
        d="M1.08997 1.40625H21.848"
        stroke="#ADADAD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4.55005 4.70312H18.3887H4.55005Z" fill="#6F6F6F" />
      <path
        d="M4.55005 4.70312H18.3887"
        stroke="#ADADAD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M9.16296 7.99805H13.7759H9.16296Z" fill="#6F6F6F" />
      <path
        d="M9.16296 7.99805H13.7759"
        stroke="#ADADAD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SortIcon;
