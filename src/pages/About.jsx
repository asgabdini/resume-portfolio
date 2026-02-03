import { useTranslation } from "react-i18next";
import moment from "moment-jalaali";
import Layout from "../components/Layout";
import { useAppData } from "../contexts/AppDataContext.jsx";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { t, i18n } = useTranslation();

  const { bio } = useAppData();

  const currentDate = moment();
  let age;
  let birthYear;

  if (i18n.language === "fa") {
    const currentYearShamsi = currentDate.jYear();
    age = currentYearShamsi - bio.birthYearShamsi;
    birthYear = bio.birthYearShamsi;
  } else {
    const currentYearGregorian = currentDate.year();
    age = currentYearGregorian - bio.birthYearGregorian;
    birthYear = bio.birthYearGregorian;
  }

  return (
    <Layout title={t("about")}>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-user mx-1 text-gray-800 dark:text-gray-200" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("aboutMe.fullName")}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {i18n.language === "fa" ? bio.fullName.fa : bio.fullName.en}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-cake-candles mx-1 text-gray-800 dark:text-gray-200" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("aboutMe.age")}
                </h2>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {age} - {`(${birthYear})`}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-graduation-cap mx-1 text-gray-800 dark:text-gray-200" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("aboutMe.education")}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {i18n.language === "fa"
                  ? bio.fieldOfStudy.fa
                  : bio.fieldOfStudy.en}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className="fa-solid fa-location-dot mx-1 text-gray-800 dark:text-gray-200" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t("aboutMe.location")}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {i18n.language === "fa"
                  ? bio.currentLocation.fa
                  : bio.currentLocation.en}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t("aboutMe.bio")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {i18n.language === "fa" ? bio.bio?.fa : bio.bio?.en}
          </p>
        </div>
      </div>

      <Helmet>
        <title>
          {t("about")} |{" "}
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

export default About;
