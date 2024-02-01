import React from 'react';

export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1064_210"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1064_210)">
      <path
        d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
        fill="#000B28"
      />
    </g>
  </svg>
);
