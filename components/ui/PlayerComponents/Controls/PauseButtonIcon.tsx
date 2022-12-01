import React from "react";
const PauseButtonIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30.2141" cy="29.5875" r="29.375" fill="white" />
      <g filter="url(#filter0_di_31805_33046)">
        <circle
          cx="30.2141"
          cy="29.5875"
          r="21.875"
          fill="url(#paint0_linear_31805_33046)"
        />
      </g>
      <g filter="url(#filter1_d_31805_33046)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.9641 22.0875C32.5834 22.0875 31.4641 23.2068 31.4641 24.5875V34.5875C31.4641 35.9682 32.5834 37.0875 33.9641 37.0875C35.3448 37.0875 36.4641 35.9682 36.4641 34.5875V24.5875C36.4641 23.2068 35.3448 22.0875 33.9641 22.0875ZM26.4641 22.0875C25.0834 22.0875 23.9641 23.2068 23.9641 24.5875V34.5875C23.9641 35.9683 25.0834 37.0875 26.4641 37.0875C27.8448 37.0875 28.9641 35.9683 28.9641 34.5875V24.5875C28.9641 23.2068 27.8448 22.0875 26.4641 22.0875Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_31805_33046"
          x="2.12036"
          y="1.49377"
          width="62.4062"
          height="62.4062"
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
          <feOffset dx="3.10938" dy="3.10938" />
          <feGaussianBlur stdDeviation="4.66406" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.133333 0 0 0 0 0.141176 0 0 0 0.34 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31805_33046"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31805_33046"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="6.21875" dy="6.21875" />
          <feGaussianBlur stdDeviation="4.66406" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_31805_33046"
          />
        </filter>
        <filter
          id="filter1_d_31805_33046"
          x="20.2266"
          y="22.0875"
          width="19.975"
          height="19.975"
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
          <feOffset dy="2.4875" />
          <feGaussianBlur stdDeviation="1.24375" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31805_33046"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31805_33046"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_31805_33046"
          x1="52.2677"
          y1="7.71252"
          x2="4.24351"
          y2="46.7175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#39AFFD" />
          <stop offset="1" stopColor="#477FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PauseButtonIcon;
