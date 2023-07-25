"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("theme");
    if (!localStorageTheme) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkMode ? "dark" : "light");
    } else {
      setTheme(localStorageTheme);
    }
    setMounted(true);
  }, [theme, setTheme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-2">
      The current theme is: {theme}
      <button
        className="p-2 bg-black text-white dark:bg-white dark:text-black"
        onClick={() => handleThemeChange("light")}
      >
        Light Mode
      </button>
      <button
        className="p-2 bg-black text-white dark:bg-white dark:text-black"
        onClick={() => handleThemeChange("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
