import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={i18n.language}
      className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 
                rounded-lg text-sm text-gray-600 dark:text-gray-300 focus:outline-none 
                focus:ring-2 focus:ring-blue-500 transition-colors"
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
};

export default LanguageSwitcher;
