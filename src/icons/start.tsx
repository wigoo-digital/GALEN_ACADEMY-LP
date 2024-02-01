import React from 'react';

export const StartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1064_181"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="19"
        height="19"
      >
        <rect x="0.5" y="0.5" width="18" height="18" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1064_181)">
        <path
          d="M4.86875 17L6.0875 11.7313L2 8.1875L7.4 7.71875L9.5 2.75L11.6 7.71875L17 8.1875L12.9125 11.7313L14.1313 17L9.5 14.2063L4.86875 17Z"
          fill="#4242FF"
        />
      </g>
    </svg>
  );
};
