"use client";

import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null; // return null if not mounted
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-1 border-2 border-neutral-200 dark:border-gray-700 rounded-full flex flex-rows w-fit gap-2">
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full p-1 ${
          theme === "dark" ? "bg-black" : "hover:bg-neutral-300"
        }`}
      >
        <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`rounded-full p-1 ${
          theme === "light" ? "bg-neutral-200" : "hover:bg-black"
        }`}
      >
        <SunIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-300" />
      </button>
    </div>
  );
}
