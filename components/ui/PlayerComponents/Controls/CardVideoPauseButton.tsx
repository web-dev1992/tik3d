const CardVideoPauseButton: React.FC<{ className: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 72 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32.25" cy="32" r="32" fill="#E4E6F2" fillOpacity="0.27" />
      <g filter="url(#filter0_di_31805_3632)">
        <circle
          cx="32.2497"
          cy="32"
          r="23.8298"
          fill="white"
          fillOpacity="0.37"
          //   style="mix-blend-mode:soft-light"
        />
      </g>
      <g filter="url(#filter1_d_31805_3632)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.1648 23.8298C26.6607 23.8298 25.4414 25.0491 25.4414 26.5532V37.4469C25.4414 38.9509 26.6607 40.1703 28.1648 40.1703C29.6689 40.1703 30.8882 38.951 30.8882 37.4469V26.5532C30.8882 25.0491 29.6689 23.8298 28.1648 23.8298ZM36.335 23.8298C34.8309 23.8298 33.6116 25.0491 33.6116 26.5532V37.4469C33.6116 38.9509 34.8309 40.1703 36.335 40.1703C37.8391 40.1703 39.0584 38.951 39.0584 37.4469V26.5532C39.0584 25.0491 37.8391 23.8298 36.335 23.8298Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_31805_3632"
          x="3.41992"
          y="3.17017"
          width="67.6592"
          height="67.6597"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.226302 0 0 0 0 0.493797 0 0 0 0 0.6875 0 0 0 0.69 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31805_3632"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31805_3632"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_31805_3632"
          />
        </filter>
        <filter
          id="filter1_d_31805_3632"
          x="20.0801"
          y="23.8298"
          width="24.3408"
          height="24.3403"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31805_3632"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31805_3632"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CardVideoPauseButton;
