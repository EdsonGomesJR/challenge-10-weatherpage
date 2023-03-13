import * as React from "react";
import { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.833 7.167c-.916 0-1.666.75-1.666 1.667 0 .916.75 1.666 1.666 1.666.917 0 1.667-.75 1.667-1.666 0-.917-.75-1.667-1.667-1.667Zm0-4.167c2.725 0 5.834 2.05 5.834 5.959 0 2.483-1.775 5.1-5.325 7.825a.826.826 0 0 1-1.017 0C5.775 14.05 4 11.442 4 8.959 4 5.05 7.108 3 9.833 3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPin;
