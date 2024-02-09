import React from "react";

export const Hamburguer = () => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1345_6360)">
        <rect
          width="39"
          height="39"
          rx="19.5"
          fill="url(#paint0_linear_1345_6360)"
          fill-opacity="0.24"
        />
        <rect
          x="0.5"
          y="0.5"
          width="38"
          height="38"
          rx="19"
          stroke="url(#paint1_linear_1345_6360)"
        />
        <mask
          id="mask0_1345_6360"
          maskUnits="userSpaceOnUse"
          x="9"
          y="9"
          width="21"
          height="21"
        >
          <path d="M9.5 9.5H29.5V29.5H9.5V9.5Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1345_6360)">
          <path
            d="M12.8333 24.5C12.5972 24.5 12.3993 24.4201 12.2396 24.2604C12.0799 24.1007 12 23.9028 12 23.6667C12 23.4306 12.0799 23.2326 12.2396 23.0729C12.3993 22.9132 12.5972 22.8333 12.8333 22.8333H26.1667C26.4028 22.8333 26.6007 22.9132 26.7604 23.0729C26.9201 23.2326 27 23.4306 27 23.6667C27 23.9028 26.9201 24.1007 26.7604 24.2604C26.6007 24.4201 26.4028 24.5 26.1667 24.5H12.8333ZM12.8333 20.3333C12.5972 20.3333 12.3993 20.2535 12.2396 20.0938C12.0799 19.934 12 19.7361 12 19.5C12 19.2639 12.0799 19.066 12.2396 18.9062C12.3993 18.7465 12.5972 18.6667 12.8333 18.6667H26.1667C26.4028 18.6667 26.6007 18.7465 26.7604 18.9062C26.9201 19.066 27 19.2639 27 19.5C27 19.7361 26.9201 19.934 26.7604 20.0938C26.6007 20.2535 26.4028 20.3333 26.1667 20.3333H12.8333ZM12.8333 16.1667C12.5972 16.1667 12.3993 16.0868 12.2396 15.9271C12.0799 15.7674 12 15.5694 12 15.3333C12 15.0972 12.0799 14.8993 12.2396 14.7396C12.3993 14.5799 12.5972 14.5 12.8333 14.5H26.1667C26.4028 14.5 26.6007 14.5799 26.7604 14.7396C26.9201 14.8993 27 15.0972 27 15.3333C27 15.5694 26.9201 15.7674 26.7604 15.9271C26.6007 16.0868 26.4028 16.1667 26.1667 16.1667H12.8333Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_1345_6360"
          x="-3"
          y="-3"
          width="45"
          height="45"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1345_6360"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1345_6360"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1345_6360"
          x1="2"
          y1="-5"
          x2="33"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1345_6360"
          x1="-4"
          y1="-16.5"
          x2="39"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.24" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
