'use client'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
  );
};

export default ThemeSwitcher;
