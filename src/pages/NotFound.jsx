import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-8xl font-bold text-gray-800 dark:text-white text-shadow-md">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
        {t("notFound.notFoundMessage")}
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg transform transition-all duration-200 hover:scale-105 hover:bg-gray-700"
      >
        {t("notFound.returnHome")}
      </button>
    </div>
  );
};

export default NotFound;
