"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
type Props = {};

const Navbar = (props: Props) => {
  const { theme } = useTheme();

  const getImageSrc = () => {
    switch (theme) {
      case "dark":
        return "/assets/logo-light.svg";
      case "light":
        return "/assets/logo-dark.svg";
      default:
        return "/assets/logo-dark.svg";
    }
  };
  return (
    <header className="w-screen flex">
      <div className=" hidden md:block bg-white dark:bg-dark-grey py-8 px-6 border-r-2 border-light-grey dark:border-grey border-b-2">
        <Image src={getImageSrc()} alt="Logo Kanban" width={153} height={26} />
      </div>
      <div className="bg-white dark:bg-dark-grey py-8 px-6 border-r-2 border-light-grey dark:border-grey border-b-2 md:hidden">
        <Image
          src="/assets/logo-mobile.svg"
          alt="Logo Kanban mobile"
          width={24}
          height={25}
        />
      </div>
      <div className=" bg-white dark:bg-dark-grey flex grow justify-between pl-6 pr-8 h-24 items-center dark:border-grey border-light-grey border-b-2">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl dark:text-white">
          Plateform Launch
        </h1>
        <div className="flex gap-6 items-center">
          <Button type="primaryl" text="+ Add New Task" add />
          <div className="flex-none">
            <Image
              src="/assets/icon-vertical-ellipsis.svg"
              width={5}
              height={20}
              alt="vertical elipsis menu"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
