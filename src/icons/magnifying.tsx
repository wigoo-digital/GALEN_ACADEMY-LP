import React from "react";

export const Magnifying = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="21"
    // height="20"
    viewBox="0 0 21 20"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1226_1409"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="21"
      height="20"
    >
      <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1226_1409)">
      <path
        d="M16.8333 17.5L11.5833 12.25C11.1667 12.5833 10.6875 12.8472 10.1458 13.0417C9.60417 13.2361 9.02778 13.3333 8.41667 13.3333C6.90278 13.3333 5.62153 12.809 4.57292 11.7604C3.52431 10.7118 3 9.43056 3 7.91667C3 6.40278 3.52431 5.12153 4.57292 4.07292C5.62153 3.02431 6.90278 2.5 8.41667 2.5C9.93056 2.5 11.2118 3.02431 12.2604 4.07292C13.309 5.12153 13.8333 6.40278 13.8333 7.91667C13.8333 8.52778 13.7361 9.10417 13.5417 9.64583C13.3472 10.1875 13.0833 10.6667 12.75 11.0833L18 16.3333L16.8333 17.5ZM8.41667 11.6667C9.45833 11.6667 10.3438 11.3021 11.0729 10.5729C11.8021 9.84375 12.1667 8.95833 12.1667 7.91667C12.1667 6.875 11.8021 5.98958 11.0729 5.26042C10.3438 4.53125 9.45833 4.16667 8.41667 4.16667C7.375 4.16667 6.48958 4.53125 5.76042 5.26042C5.03125 5.98958 4.66667 6.875 4.66667 7.91667C4.66667 8.95833 5.03125 9.84375 5.76042 10.5729C6.48958 11.3021 7.375 11.6667 8.41667 11.6667Z"
        fill="white"
      />
    </g>
  </svg>
);