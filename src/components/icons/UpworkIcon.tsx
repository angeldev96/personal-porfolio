import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

export const UpworkIcon = (props: Props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="4" fill="#6fda44" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">Upwork</text>
  </svg>
);

export default UpworkIcon;
