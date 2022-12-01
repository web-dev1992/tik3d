const PlayArrowIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>

    // <svg
    //   className={className}
    //   viewBox="0 0 27 36"
    //   fill="currentColor"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g filter="url(#filter0_d_31805_32374)">
    //     <path
    //       d="M4.41901 2.87746C4.41901 2.05592 4.89005 1.30707 5.63037 0.951184C6.37099 0.595296 7.2498 0.695375 7.89125 1.20859L22.1393 12.6069C22.6463 13.0127 22.9414 13.6268 22.9414 14.2759C22.9414 14.925 22.6463 15.5391 22.1393 15.9449L7.89125 27.3434C7.2498 27.8566 6.37099 27.9566 5.63037 27.6007C4.89005 27.2448 4.41901 26.4959 4.41901 25.6743V2.87746Z"
    //       fill="currentColor"
    //     />
    //   </g>
    //   <defs>
    //     <filter
    //       id="filter0_d_31805_32374"
    //       x="0.418945"
    //       y="0.740234"
    //       width="26.5225"
    //       height="35.0715"
    //       filterUnits="userSpaceOnUse"
    //       colorInterpolationFilters="sRGB"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset dy="4" />
    //       <feGaussianBlur stdDeviation="2" />
    //       <feComposite in2="hardAlpha" operator="out" />
    //       <feColorMatrix
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in2="BackgroundImageFix"
    //         result="effect1_dropShadow_31805_32374"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="effect1_dropShadow_31805_32374"
    //         result="shape"
    //       />
    //     </filter>
    //   </defs>
    // </svg>
  );
};

export default PlayArrowIcon;
