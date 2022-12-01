const VolumeIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.81143 4.65192C8.81143 6.4344 7.54991 7.80945 5.84714 8.22253V9.17885C8.1043 8.74879 9.80706 6.88143 9.80706 4.65192C9.80706 2.41675 8.1043 0.549399 5.84714 0.125V1.07565C7.54991 1.48874 8.81143 2.86379 8.81143 4.65192ZM4.7158 8.89569L2.11355 6.03242H0.755859V3.2597H2.1079L4.7158 0.396436V8.89569ZM7.54424 4.64615C7.54424 3.74643 6.83146 2.98252 5.84714 2.69392V6.59838C6.83146 6.30979 7.54424 5.55154 7.54424 4.64615Z"
        fill="url(#paint0_linear_31805_10892)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_31805_10892"
          x1="9.27231"
          y1="8.76731"
          x2="1.8643"
          y2="0.127054"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0898E7" />
          <stop offset="1" stopColor="#0898E7" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VolumeIcon;
