import * as React from "react";
import { SvgPropTypes } from "./iconType";



export const TimeIcon = (props: SvgPropTypes): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2498 10.0005C19.2498 15.1095 15.1088 19.2505 9.99976 19.2505C4.89076 19.2505 0.749756 15.1095 0.749756 10.0005C0.749756 4.89149 4.89076 0.750488 9.99976 0.750488C15.1088 0.750488 19.2498 4.89149 19.2498 10.0005Z"
        stroke="#54577A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4314 12.9429L9.66138 10.6939V5.84686"
        stroke="#54577A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
