"use client";
import Image from "next/image";
import React from "react";
import { useAppSelector } from "@/Redux/store";
const Logo = () => {
  const isOpen = useAppSelector((state) => state.openCloseNav.isOpen);

  return (
    <div
      className={`bg-white dark:bg-dark-grey px-6 border-r-2 border-light-grey dark:border-grey border-b-2 flex gap-4 items-center h-16 md:h-20 lg:h-24 ${
        isOpen ? "md:w-[260px] lg:w-[300px]" : ""
      }`}
    >
      <div className="flex-none">
        <Image
          src="/assets/logo-mobile.svg"
          alt="Logo Kanban mobile"
          width={24}
          height={25}
        />
      </div>
      <h1 className="font-bold text-2xl hidden md:block">Kanban</h1>
    </div>
  );
};

export default Logo;
