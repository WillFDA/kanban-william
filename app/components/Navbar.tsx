"use client";
import Image from "next/image";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import { useSelector } from "react-redux";
import { closeNav, openNav } from "../../Redux/features/openCloseNavSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const isOpen = useSelector((state) => state.openCloseNav.isOpen);
  const dispatch = useDispatch();

  const handleHideSidebarClick = () => {
    dispatch(closeNav());
  };

  const handleShowSidebarClick = () => {
    dispatch(openNav());
  };
  return (
    <>
      <aside
        className={`lg:h-[calc(100vh-96px)] md:h-[calc(100vh-80px)] dark:bg-dark-grey bg-white absolute md:top-20 lg:top-24 hidden md:block  md:w-[260px] lg:w-[300px] py-[18px] pb-11 border-r-2 border-light-grey dark:border-grey pl-8 pr-6 transition-all ${
          isOpen ? "left-0" : "-left-full"
        } `}
      >
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
          <div className="flex flex-col gap-7">
            <ThemeSwitcher />
            {isOpen && (
              <button
                onClick={handleHideSidebarClick}
                className="items-center gap-[10px] text-medium-grey justify-start hidden md:flex"
              >
                <div className="flex-none">
                  <Image
                    src="/assets/icon-hide-sidebar.svg"
                    width={18}
                    height={16}
                    alt="Hide Sidebar"
                  />
                </div>
                Hide Sidebar
              </button>
            )}
          </div>
        </div>
      </aside>

      <button
        onClick={handleShowSidebarClick}
        className={` z-20 transition-all
    bg-main-purple rounded-r-full absolute  bottom-11 w-14 h-12 
    flex items-center justify-start pl-4 ${isOpen ? "-left-full" : "left-0"}
  `}
      >
        <Image
          src="/assets/icon-show-sidebar.svg"
          width={16}
          height={11}
          alt="Hide Sidebar"
        />
      </button>
    </>
  );
};

export default Navbar;
