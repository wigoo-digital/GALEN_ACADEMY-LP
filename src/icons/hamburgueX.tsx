import React from "react";

export const HamburguerX = () => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1400_7699)">
        <rect
          width="39"
          height="39"
          rx="19.5"
          fill="url(#paint0_linear_1400_7699)"
          fill-opacity="0.24"
        />
        <rect
          x="0.5"
          y="0.5"
          width="38"
          height="38"
          rx="19"
          stroke="url(#paint1_linear_1400_7699)"
        />
        <path
          d="M14.5 14.5L25.1452 25.1452M14.5 25.1452L25.1452 14.5"
          stroke="white"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1400_7699"
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
            result="effect1_backgroundBlur_1400_7699"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1400_7699"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1400_7699"
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
          id="paint1_linear_1400_7699"
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
