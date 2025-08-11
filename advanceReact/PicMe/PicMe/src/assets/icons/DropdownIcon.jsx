import * as React from "react";

const DropdownIcon = (
  { color = "#A0AEC0", ...props } // default gray-300
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="7"
    fill="none"
    viewBox="0 0 14 7"
    {...props}
  >
    <path
      fill={color}
      d="M.002.993A.99.99 0 0 1 .534.114 1 1 0 0 1 1.638.23l5.348 4.442L12.344.388a1 1 0 0 1 1.407.15.99.99 0 0 1 .12 1.142 1 1 0 0 1-.27.305l-5.986 4.79a1 1 0 0 1-1.267 0L.36 1.815a1 1 0 0 1-.36-.823"
    ></path>
  </svg>
);

export default DropdownIcon;
