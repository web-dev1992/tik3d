const CardVideoPlayButton: React.FC<{ className: string }> = ({
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
      <g filter="url(#filter0_di_31805_28039)">
        <circle
          cx="32.2497"
          cy="32"
          r="23.8298"
          fill="white"
          fillOpacity="0.37"
          //   style="mix-blend-mode:soft-light"
        />
      </g>
      <g filter="url(#filter1_d_31805_28039)">
        <path
          d="M28.2499 24.4286C28.2499 23.8794 28.5648 23.3789 29.0596 23.141C29.5547 22.9031 30.1421 22.97 30.5709 23.3131L40.0947 30.932C40.4336 31.2033 40.6309 31.6137 40.6309 32.0476C40.6309 32.4816 40.4336 32.892 40.0947 33.1633L30.5709 40.7823C30.1421 41.1254 29.5547 41.1922 29.0596 40.9543C28.5648 40.7164 28.2499 40.2159 28.2499 39.6667V24.4286Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_31805_28039"
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
            result="effect1_dropShadow_31805_28039"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31805_28039"
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
            result="effect2_innerShadow_31805_28039"
          />
        </filter>
        <filter
          id="filter1_d_31805_28039"
          x="24.25"
          y="23"
          width="20.3809"
          height="26.0955"
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
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31805_28039"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31805_28039"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CardVideoPlayButton;
