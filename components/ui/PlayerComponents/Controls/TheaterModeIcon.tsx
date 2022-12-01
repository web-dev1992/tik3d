const TheaterModeIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.726562 0.298462H13.6366V9.33801H0.726562V0.298462ZM2.66339 7.40093H11.7004V2.2355H2.66339V7.40093Z"
        fill="url(#paint0_linear_31805_32842)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_31805_32842"
          x1="12.8737"
          y1="8.92712"
          x2="6.26925"
          y2="-2.07718"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0898E7" />
          <stop offset="1" stopColor="#0898E7" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TheaterModeIcon;
