import { useState } from "react";
import React from "react";
import OutsideLayout from "@components/layout/OutsideLayout";

const langItems = [
  {
    id: "l1",
    label: "Fa",
    file: (
      <svg
        className="w-[13px] h-[9px] xl:w-5 xl:h-3.5 "
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.16992"
          y="1.04297"
          width="19.5"
          height="13.5"
          rx="1.75"
          fill="white"
          stroke="#F5F5F5"
          strokeWidth="0.5"
        />
        <mask
          id="mask0_29679_37002"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="21"
          height="15"
        >
          <rect
            x="1.16992"
            y="1.04297"
            width="19.5"
            height="13.5"
            rx="1.75"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
          />
        </mask>
        <g mask="url(#mask0_29679_37002)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.919922 5.45964H20.9199V0.792969H0.919922V5.45964Z"
            fill="#38BB56"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.919922 14.7931H20.9199V10.1265H0.919922V14.7931Z"
            fill="#DE1B27"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.2054 4.52637C2.02131 4.52637 1.87207 4.67561 1.87207 4.8597V5.12637C1.87207 5.31046 2.02131 5.4597 2.2054 5.4597H2.49112C2.67521 5.4597 2.82445 5.31046 2.82445 5.12637V4.8597C2.82445 4.67561 2.67521 4.52637 2.49112 4.52637H2.2054ZM4.11017 4.52637C3.92607 4.52637 3.77683 4.67561 3.77683 4.8597V5.12637C3.77683 5.31046 3.92607 5.4597 4.11017 5.4597H4.39588C4.57997 5.4597 4.72921 5.31046 4.72921 5.12637V4.8597C4.72921 4.67561 4.57997 4.52637 4.39588 4.52637H4.11017ZM5.68159 4.8597C5.68159 4.67561 5.83083 4.52637 6.01493 4.52637H6.30064C6.48474 4.52637 6.63398 4.67561 6.63398 4.8597V5.12637C6.63398 5.31046 6.48474 5.4597 6.30064 5.4597H6.01493C5.83083 5.4597 5.68159 5.31046 5.68159 5.12637V4.8597ZM7.91969 4.52637C7.73559 4.52637 7.58636 4.67561 7.58636 4.8597V5.12637C7.58636 5.31046 7.73559 5.4597 7.91969 5.4597H8.2054C8.3895 5.4597 8.53874 5.31046 8.53874 5.12637V4.8597C8.53874 4.67561 8.3895 4.52637 8.2054 4.52637H7.91969ZM9.49112 4.8597C9.49112 4.67561 9.64036 4.52637 9.82445 4.52637H10.1102C10.2943 4.52637 10.4435 4.67561 10.4435 4.8597V5.12637C10.4435 5.31046 10.2943 5.4597 10.1102 5.4597H9.82445C9.64036 5.4597 9.49112 5.31046 9.49112 5.12637V4.8597ZM11.7292 4.52637C11.5451 4.52637 11.3959 4.67561 11.3959 4.8597V5.12637C11.3959 5.31046 11.5451 5.4597 11.7292 5.4597H12.0149C12.199 5.4597 12.3483 5.31046 12.3483 5.12637V4.8597C12.3483 4.67561 12.199 4.52637 12.0149 4.52637H11.7292ZM13.3006 4.8597C13.3006 4.67561 13.4499 4.52637 13.634 4.52637H13.9197C14.1038 4.52637 14.253 4.67561 14.253 4.8597V5.12637C14.253 5.31046 14.1038 5.4597 13.9197 5.4597H13.634C13.4499 5.4597 13.3006 5.31046 13.3006 5.12637V4.8597ZM15.5387 4.52637C15.3546 4.52637 15.2054 4.67561 15.2054 4.8597V5.12637C15.2054 5.31046 15.3546 5.4597 15.5387 5.4597H15.8245C16.0085 5.4597 16.1578 5.31046 16.1578 5.12637V4.8597C16.1578 4.67561 16.0085 4.52637 15.8245 4.52637H15.5387ZM17.1102 4.8597C17.1102 4.67561 17.2594 4.52637 17.4435 4.52637H17.7292C17.9133 4.52637 18.0625 4.67561 18.0625 4.8597V5.12637C18.0625 5.31046 17.9133 5.4597 17.7292 5.4597H17.4435C17.2594 5.4597 17.1102 5.31046 17.1102 5.12637V4.8597ZM19.3483 4.52637C19.1642 4.52637 19.0149 4.67561 19.0149 4.8597V5.12637C19.0149 5.31046 19.1642 5.4597 19.3483 5.4597H19.634C19.8181 5.4597 19.9673 5.31046 19.9673 5.12637V4.8597C19.9673 4.67561 19.8181 4.52637 19.634 4.52637H19.3483ZM1.87207 10.4597C1.87207 10.2756 2.02131 10.1264 2.2054 10.1264H2.49112C2.67521 10.1264 2.82445 10.2756 2.82445 10.4597V10.7264C2.82445 10.9105 2.67521 11.0597 2.49112 11.0597H2.2054C2.02131 11.0597 1.87207 10.9105 1.87207 10.7264V10.4597ZM4.11017 10.1264C3.92607 10.1264 3.77683 10.2756 3.77683 10.4597V10.7264C3.77683 10.9105 3.92607 11.0597 4.11017 11.0597H4.39588C4.57997 11.0597 4.72921 10.9105 4.72921 10.7264V10.4597C4.72921 10.2756 4.57997 10.1264 4.39588 10.1264H4.11017ZM5.68159 10.4597C5.68159 10.2756 5.83083 10.1264 6.01493 10.1264H6.30064C6.48474 10.1264 6.63398 10.2756 6.63398 10.4597V10.7264C6.63398 10.9105 6.48474 11.0597 6.30064 11.0597H6.01493C5.83083 11.0597 5.68159 10.9105 5.68159 10.7264V10.4597ZM7.91969 10.1264C7.73559 10.1264 7.58636 10.2756 7.58636 10.4597V10.7264C7.58636 10.9105 7.73559 11.0597 7.91969 11.0597H8.2054C8.3895 11.0597 8.53874 10.9105 8.53874 10.7264V10.4597C8.53874 10.2756 8.3895 10.1264 8.2054 10.1264H7.91969ZM9.49112 10.4597C9.49112 10.2756 9.64036 10.1264 9.82445 10.1264H10.1102C10.2943 10.1264 10.4435 10.2756 10.4435 10.4597V10.7264C10.4435 10.9105 10.2943 11.0597 10.1102 11.0597H9.82445C9.64036 11.0597 9.49112 10.9105 9.49112 10.7264V10.4597ZM11.7292 10.1264C11.5451 10.1264 11.3959 10.2756 11.3959 10.4597V10.7264C11.3959 10.9105 11.5451 11.0597 11.7292 11.0597H12.0149C12.199 11.0597 12.3483 10.9105 12.3483 10.7264V10.4597C12.3483 10.2756 12.199 10.1264 12.0149 10.1264H11.7292ZM13.3006 10.4597C13.3006 10.2756 13.4499 10.1264 13.634 10.1264H13.9197C14.1038 10.1264 14.253 10.2756 14.253 10.4597V10.7264C14.253 10.9105 14.1038 11.0597 13.9197 11.0597H13.634C13.4499 11.0597 13.3006 10.9105 13.3006 10.7264V10.4597ZM15.5387 10.1264C15.3546 10.1264 15.2054 10.2756 15.2054 10.4597V10.7264C15.2054 10.9105 15.3546 11.0597 15.5387 11.0597H15.8245C16.0085 11.0597 16.1578 10.9105 16.1578 10.7264V10.4597C16.1578 10.2756 16.0085 10.1264 15.8245 10.1264H15.5387ZM17.1102 10.4597C17.1102 10.2756 17.2594 10.1264 17.4435 10.1264H17.7292C17.9133 10.1264 18.0625 10.2756 18.0625 10.4597V10.7264C18.0625 10.9105 17.9133 11.0597 17.7292 11.0597H17.4435C17.2594 11.0597 17.1102 10.9105 17.1102 10.7264V10.4597ZM19.3483 10.1264C19.1642 10.1264 19.0149 10.2756 19.0149 10.4597V10.7264C19.0149 10.9105 19.1642 11.0597 19.3483 11.0597H19.634C19.8181 11.0597 19.9673 10.9105 19.9673 10.7264V10.4597C19.9673 10.2756 19.8181 10.1264 19.634 10.1264H19.3483Z"
            fill="white"
            fillOpacity="0.5"
          />
          <mask id="path-6-inside-1_29679_37002" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.958 6.75781C9.6712 7.01387 9.49121 7.38284 9.49121 7.79301C9.49121 8.56621 10.1308 9.19301 10.9198 9.19301C11.7088 9.19301 12.3484 8.56621 12.3484 7.79301C12.3484 7.39058 12.1751 7.02781 11.8977 6.77243"
            />
          </mask>
          <path
            d="M9.51401 6.26051C9.09337 6.63605 8.82454 7.18266 8.82454 7.79301H10.1579C10.1579 7.58302 10.249 7.39169 10.402 7.25512L9.51401 6.26051ZM8.82454 7.79301C8.82454 8.94703 9.77538 9.85968 10.9198 9.85968V8.52635C10.4862 8.52635 10.1579 8.18539 10.1579 7.79301H8.82454ZM10.9198 9.85968C12.0642 9.85968 13.015 8.94703 13.015 7.79301H11.6817C11.6817 8.18539 11.3533 8.52635 10.9198 8.52635V9.85968ZM13.015 7.79301C13.015 7.19428 12.7563 6.65668 12.3492 6.28195L11.4462 7.26291C11.5939 7.39894 11.6817 7.58689 11.6817 7.79301H13.015Z"
            fill="#D80915"
            mask="url(#path-6-inside-1_29679_37002)"
          />
          <rect
            x="10.4434"
            y="7.32617"
            width="0.95238"
            height="1.86667"
            rx="0.47619"
            fill="#D80915"
          />
        </g>
      </svg>
    ),
  },
  {
    id: "l2",
    label: "GB",
    file: (
      <svg
        className="w-[13px] h-[9px] xl:w-[21px] xl:h-[15px]"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.654785"
          y="0.827393"
          width="12.4384"
          height="8.70685"
          rx="1.24384"
          fill="white"
        />
        <mask
          id="mask0_31378_26573"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="14"
          height="10"
        >
          <rect
            x="0.654785"
            y="0.827393"
            width="12.4384"
            height="8.70685"
            rx="1.24384"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_31378_26573)">
          <rect
            x="0.654785"
            y="0.827393"
            width="12.4384"
            height="8.70685"
            fill="#0A17A7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0850301 -0.00683594L5.39314 3.50192V0.247033H8.35465V3.50203L13.6629 -0.00682977L14.3253 0.955611L10.1285 3.72977H13.0931V6.63205H10.1285L14.3252 9.40619L13.6628 10.3686L8.35465 6.85985V10.1148H5.39314V6.85996L0.0851471 10.3686L-0.577276 9.4062L3.6195 6.63205H0.654716V3.72977H3.61942L-0.577393 0.955604L0.0850301 -0.00683594Z"
            fill="white"
          />
          <path
            d="M8.94775 3.58414L14.574 -0.0432129"
            stroke="#DB1F35"
            strokeWidth="0.414612"
            strokeLinecap="round"
          />
          <path
            d="M9.54504 6.79047L14.5887 10.1221"
            stroke="#DB1F35"
            strokeWidth="0.414612"
            strokeLinecap="round"
          />
          <path
            d="M4.21094 3.57451L-1.05005 0.0998535"
            stroke="#DB1F35"
            strokeWidth="0.414612"
            strokeLinecap="round"
          />
          <path
            d="M4.78155 6.75014L-1.05005 10.54"
            stroke="#DB1F35"
            strokeWidth="0.414612"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.654785 6.0515H5.98551V9.53424H7.76242V6.0515H13.0931V4.31013H7.76242V0.827393H5.98551V4.31013H0.654785V6.0515Z"
            fill="#E6273E"
          />
        </g>
      </svg>
    ),
  },
];
const LanguageDropDown: React.FC<{
  showLabel?: boolean;
  className?: string;
}> = ({ showLabel = true, className }) => {
  const [showLang, setShowLang] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const LangSelectHandler = (): void => {
    if (showLang) setShowLang(false);
  };
  const openCloseLangSelect = () => {
    setShowLang((showLang) => !showLang);
  };
  return (
    <OutsideLayout operator={LangSelectHandler} className={className}>
      <button
        onClick={openCloseLangSelect}
        className="w-full flex-shrink-0 z-10 rounded flex flex-row justify-center gap-1 items-center xl:py-2 p-[5px] xl:px-1.5  text-[10px] xl:text-sm font-extralight text-center text-[#848484] bg-white cursor-pointer "
      >
        <span className="flex flex-row flex-nowrap justify-center items-center gap-1 xl:gap-1.5 ">
          {langItems[currentIndex].file}
          {showLabel && <span>{langItems[currentIndex].label}</span>}
        </span>
        <svg
          aria-hidden="true"
          className="w-8 h-5 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {showLang && (
        <div className="absolute z-20 w-full top-9 xl:top-14 left-15 rounded divide-y divide-gray-100 shadow  bg-white flex flex-row justify-end border border-stone-300">
          <ul className="xl:py-1 text-sm p-[5px] xl:px-3  text-[10px] ">
            {langItems.map((lang, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="inline-flex xl:py-1 text-sm p-[5px] xl:px-3  text-[10px] w-full  text-[#848484]  "
                  onClick={() => {
                    setCurrentIndex(index);
                    setShowLang(false);
                  }}
                >
                  <div className="inline-flex items-center gap-1 xl:text-sm">
                    {showLabel && <span>{lang.label}</span>}
                    {lang.file}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </OutsideLayout>
  );
};

export default LanguageDropDown;
