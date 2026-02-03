import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import { useAppData } from "../contexts/AppDataContext";
import { Helmet } from "react-helmet-async";

const Experience = () => {
  const { t, i18n } = useTranslation();

  const { experiences, bio } = useAppData();

  return (
    <Layout title={t("experience")}>
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {i18n.language === "fa" ? exp.position.fa : exp.position.en}
            </h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 mt-1">
              {i18n.language === "fa" ? exp.company.fa : exp.company.en}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-1 italic">
              {i18n.language === "fa" ? exp.period.fa : exp.period.en}
            </p>
            <ul className="mt-4 space-y-2">
              {exp.description.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 dark:text-gray-300 flex items-start"
                >
                  <span className="mr-2">•</span>
                  {i18n.language === "fa" ? item.fa : item.en}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Helmet>
        <title>
          {t("experience")} |{" "}
          {bio
            ? i18n.language === "fa"
              ? bio.fullName.fa
              : bio.fullName.en
            : "My Portfolio"}
        </title>
      </Helmet>
    </Layout>
  );
};

export default Experience;
