import Image from "next/image";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <aside className="h-[calc(100vh-96px)] dark:bg-dark-grey bg-white absolute top-24 hidden md:block  md:w-[260px] lg:w-[300px] py-[18px] border-r-2 border-light-grey dark:border-grey pl-8 pr-6">
      <div className=" h-full flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="heading-s">ALL BOARDS (3)</h3>
          <nav className="flex flex-col">
            <button>
              {/* <Image /> */}
              <span></span>
            </button>
          </nav>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
