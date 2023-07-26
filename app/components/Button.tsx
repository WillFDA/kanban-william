"use client";

import Image from "next/image";
import React from "react";

type Props = {
  text: string;
  type: "primaryl" | "primarys" | "secondary" | "destructive";
  // handleClick: () => void;
  add?: boolean;
};
const buttonStyles = {
  primaryl:
    "text-white bg-main-purple py-4 text-[15px] font-bold hover:bg-main-purple-hover",
  primarys:
    "text-white bg-main-purple py-2 text-[13px] font-bold hover:bg-main-purple-hover",
  secondary:
    "text-main-purple bg-light-grey py-2 dark:bg-white  text-[13px] hover:bg-main-purple-hover",
  destructive:
    "text-white bg-main-red hover:bg-main-red-hover py-2 text-[13px]",
};

const Button = (props: Props) => {
  const buttonStyle = buttonStyles[props.type] || buttonStyles.primarys;
  return (
    <button
      className={`w-full px-6 rounded-full ${buttonStyle} ${
        props.add && `flex items-center`
      }`}
    >
      {props.add && (
        <div className="block md:hidden">
          <Image
            src="/assets/icon-add-task-mobile.svg"
            alt="Add Icon"
            width={12}
            height={12}
          />
        </div>
      )}
      <span className="hidden md:block">{props.text}</span>
    </button>
  );
};

export default Button;
