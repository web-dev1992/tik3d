import React from "react";

const SearchIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      className={className}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="11.9847"
        transform="matrix(-1 0 0 1 16.811 15.689)"
        stroke="#F2F2F2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.47498 24.6472L3.77627 29.3337"
        stroke="#F2F2F2"
        strokeWidth="2.00785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
