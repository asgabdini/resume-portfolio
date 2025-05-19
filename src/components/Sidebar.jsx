import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const isRTL = i18n.language === "fa";

  const navItems = [
    { path: "/", icon: "fas fa-home", text: "home" },
    { path: "/about", icon: "fas fa-user", text: "about" },
    { path: "/projects", icon: "fas fa-project-diagram", text: "projects" },
    { path: "/skills", icon: "fas fa-laptop-code", text: "skill" },
    { path: "/experience", icon: "fas fa-briefcase", text: "experience" },
    { path: "/education", icon: "fas fa-graduation-cap", text: "education" },
    // { path: "/contact", icon: "fas fa-envelope", text: "contact" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed inset-y-0 z-30 w-64 overflow-y-auto transition duration-300 transform 
        bg-white dark:bg-gray-800 shadow-lg lg:translate-x-0 lg:static lg:inset-0
        ${isRTL ? "right-0" : "left-0"}
        ${
          isOpen
            ? "translate-x-0 ease-out"
            : `${isRTL ? "translate-x-full" : "-translate-x-full"} ease-in`
        }`}
      >
        {/* Logo section */}
        <div className="flex items-center justify-center p-6 border-b dark:border-gray-700">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </span>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={toggleSidebar} // اضافه کردن این خط
              className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <i className={`fa-solid ${item.icon} w-5 h-5`} />
              <span className="mx-3">{t(item.text)}</span>
            </Link>
          ))}
        </nav>

        {/* Theme and Language Settings */}
        <div className="absolute bottom-0 w-full p-4 border-t dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {theme === "dark" ? t("darkMode") : t("lightMode")}
            </span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <i
                className={`w-5 h-5 ${
                  theme === "dark"
                    ? "fa-solid fa-moon text-gray-400"
                    : "fa-solid fa-sun text-gray-600"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {t("switchLanguage")}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
