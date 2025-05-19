import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-16 h-8 rounded-full shadow-lg transition-all duration-300 dark:bg-gray-700 bg-blue-100"
    >
      <div
        className={`absolute w-7 h-7 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center
        ${
          theme === "dark"
            ? "translate-x-7 bg-gray-800"
            : "translate-x-1 bg-yellow-400"
        }`}
      >
        <i
          className={`fa-solid ${
            theme === "dark"
              ? "fa-moon text-gray-200"
              : "fa-sun text-yellow-600"
          } text-sm`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
