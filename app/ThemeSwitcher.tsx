"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const prefersDarkMode =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (!theme) {
      setTheme(prefersDarkMode ? "dark" : "light");
    }

    setMounted(true);
  }, [theme, setTheme]);
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-2">
      The current theme is: {theme}
      <button
        className="p-2 bg-black text-white dark:bg-white dark:text-black"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className="p-2 bg-black text-white dark:bg-white dark:text-black"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
