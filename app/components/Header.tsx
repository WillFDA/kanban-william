import Image from "next/image";
import React from "react";
import Logo from "./Logo";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-screen flex">
      <Logo />
      <div className=" bg-white dark:bg-dark-grey flex grow justify-between pl-6 pr-8 items-center dark:border-grey border-light-grey border-b-2 max-h-16 md:max-h-20 lg:max-h-24">
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl dark:text-white">
          Plateform Launch
        </h2>
        <div className="flex gap-6 items-center">
          <button className="primary-L hidden md:block">+ Add New Task</button>
          <button className="primary-L md:hidden">
            <Image
              src="/assets/icon-add-task-mobile.svg"
              width={12}
              height={12}
              alt="icon Add Task"
            />
          </button>
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

export default Header;
