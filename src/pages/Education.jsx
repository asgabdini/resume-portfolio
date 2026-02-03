import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import { useAppData } from "../contexts/AppDataContext";
import { Helmet } from "react-helmet-async";

const Education = () => {
  const { t, i18n } = useTranslation();

  const { educations, courses, bio } = useAppData();

  return (
    <Layout title={t("education")}>
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Education Section */}
        <div className="mb-12">
          {/* <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            {t("educations.academicEducation")}
          </h1> */}
          <div className="grid gap-6 md:grid-cols-2">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-blue-600 dark:text-blue-300 text-xl"></i>
                  </div>
                  <h2 className="ml-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                    {t(edu.degree)}
                  </h2>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {i18n.language === "fa"
                      ? edu.university.fa
                      : edu.university.en}
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-300">
                    <span className="font-medium">{t("educations.gpa")}:</span>
                    <span className="ml-2">{edu.gpa}</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {t("educations.graduationDate")}:{" "}
                    <span className="font-medium">
                      {i18n.language === "fa"
                        ? edu.graduationDate.fa
                        : edu.graduationDate.en}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            {t("educations.courses")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {i18n.language === "fa" ? course.title.fa : course.title.en}
                </h3>
                <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {i18n.language === "fa" ? course.year.fa : course.year.en}
                </div>
                {course.certificateLink && (
                  <div className="space-y-4">
                    <img
                      src={course.certificateLink}
                      alt={t("educations.certificate")}
                      className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                    <a
                      href={course.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      {t("educations.certificate")}
                    </a>
                  </div>
                )}
                {course.site && (
                  <a
                    href={`https://${course.site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {course.site}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Helmet>
        <title>
          {t("education")} |{" "}
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

export default Education;
