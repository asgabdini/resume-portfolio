import { useState } from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

export const technicalSkills = [
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 70 },
  { name: "Vue", percentage: 85 },
  { name: "Express", percentage: 85 },
  { name: "Python", percentage: 85 },
  { name: "SQL Server", percentage: 85 },
  { name: "MongoDB", percentage: 70 },
  { name: "Machine Learning", percentage: 60 },
  { name: "Software Skills", percentage: 90 },
];

export const softSkills = [
  { en: "Good Listener", fa: "شنونده خوب" },
  { en: "Responsibility", fa: "مسئولیت‌پذیری" },
  { en: "Innovation", fa: "نوآوری" },
  { en: "Accepting Criticism", fa: "انتقادپذیری" },
  { en: "Creativity and Idea Generation", fa: "خلاقیت و ایده‌پردازی" },
  { en: "Problem Solving", fa: "مهارت حل مساله" },
  { en: "Sense of Humor", fa: "شوخ طبعی" },
  { en: "Providing Feedback", fa: "ارائه فیدبک" },
  { en: "Teaching", fa: "آموزش دادن" },
];

export const languages = [
  { name: { en: "Persian", fa: "فارسی" }, stars: 5 },
  { name: { en: "Turkish", fa: "ترکی" }, stars: 4 },
  { name: { en: "English", fa: "انگلیسی" }, stars: 2 },
  { name: { en: "German", fa: "آلمانی" }, stars: 1 },
];

const Skills = () => {
  const { t, i18n } = useTranslation();

  const [isAscending, setIsAscending] = useState(true);

  const sortedSkills = [...technicalSkills].sort((a, b) => {
    return isAscending
      ? a.percentage - b.percentage
      : b.percentage - a.percentage;
  });

  const toggleSortOrder = () => {
    setIsAscending((prev) => !prev);
  };

  return (
    <Layout title={t("skill")}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Technical Skills Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {t("skills.technicalSkills")}
            </h2>
            <button
              onClick={toggleSortOrder}
              className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
            >
              <span className="text-lg">
                {isAscending ? (
                  <i className="fas fa-sort-amount-down-alt"></i>
                ) : (
                  <i className="fas fa-sort-amount-up"></i>
                )}
              </span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sortedSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      skill.percentage >= 80
                        ? "bg-gradient-to-r from-green-400 to-green-500"
                        : skill.percentage >= 60
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                        : "bg-gradient-to-r from-red-400 to-red-500"
                    }`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Soft Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {t("skills.softSkills")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 
                         text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium 
                         hover:shadow-md transition-all duration-300 cursor-default"
              >
                {i18n.language === "fa" ? skill.fa : skill.en}
              </span>
            ))}
          </div>
        </div>
        {/* Languages Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {t("skills.languages")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {i18n.language === "fa" ? language.name.fa : language.name.en}
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < language.stars
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
