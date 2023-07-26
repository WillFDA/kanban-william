"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(resolvedTheme === "dark");

  // Mettre à jour l'état checked lorsque le thème change
  useEffect(() => {
    setMounted(true);
    setChecked(resolvedTheme === "dark");
  }, [resolvedTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full flex gap-6 bg-light-grey dark:bg-very-dark-grey rounded-md justify-center py-4">
      <div className="flex-none">
        <Image
          src="/assets/icon-light-theme.svg"
          width={19}
          height={19}
          alt="dark theme logo"
        />
      </div>
      <label htmlFor="switch" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="switch"
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
          />
          <div className="block bg-main-purple w-10 h-5 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 ease-in-out ${
              checked && "transform translate-x-5"
            }`}
          ></div>
        </div>
      </label>
      <div className="flex-none">
        <Image
          src="/assets/icon-dark-theme.svg"
          width={16}
          height={16}
          alt="dark theme logo"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
