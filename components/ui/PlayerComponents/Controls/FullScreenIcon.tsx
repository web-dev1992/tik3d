const FullScreenIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.318359 4.52676H2.25484V2.5897H4.19131V0.652649H0.318359V4.52676M10.6461 0.652649V2.5897H12.5826V4.52676H14.5191V0.652649H10.6461M10.6461 9.04651V10.9836H14.5191V7.10946H12.5826V9.04651H10.6461M2.25484 7.10946H0.318359V10.9836H4.19131V9.04651H2.25484V7.10946"
        fill="url(#paint0_linear_31805_32845)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_31805_32845"
          x1="13.6802"
          y1="10.514"
          x2="5.99976"
          y2="-1.80325"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0898E7" />
          <stop offset="1" stopColor="#0898E7" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FullScreenIcon;
