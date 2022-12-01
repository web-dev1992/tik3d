const NextIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.71401 0.590515V3.16678L0.0664062 0.590515V7.69299L4.71401 5.11027V7.69299L10.0717 4.852V7.69299H11.6854V0.590515H10.0717V3.78663L4.71401 0.590515"
        fill="url(#paint0_linear_31805_32829)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_31805_32829"
          x1="10.9988"
          y1="7.37015"
          x2="6.16408"
          y2="-1.85725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0898E7" />
          <stop offset="1" stopColor="#0898E7" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NextIcon;
