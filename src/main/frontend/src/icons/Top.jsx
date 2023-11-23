import React from "react";

export const Top = (props) => {
  const { bg } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={11}
      viewBox="0 0 26 11"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.94165 10.9999H25.3424C25.1471 10.5109 24.8516 10.0527 24.4557 9.65685L15.9704 1.17157C14.4083 -0.390524 11.8757 -0.390524 10.3136 1.17157L1.8283 9.65685C1.43243 10.0527 1.13688 10.5109 0.94165 10.9999Z"
        fill={bg === "white" ? "#fff" : "#042F61"}
      />
    </svg>
  );
};
