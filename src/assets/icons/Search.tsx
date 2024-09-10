import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="m14 14-4-4m1.333-3.333a4.667 4.667 0 1 1-9.333 0 4.667 4.667 0 0 1 9.333 0"
    />
  </svg>
);
export default SvgSearch;
