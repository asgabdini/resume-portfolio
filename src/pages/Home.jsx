import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useAppData } from "../contexts/AppDataContext";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { t, i18n } = useTranslation();

  const { softSkills, languages, technicalSkills, projects, bio } =
    useAppData();

  const stats = [
    {
      title: { en: "Projects", fa: "پروژه‌ها" },
      value: projects.length,
      icon: "fas fa-project-diagram",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: { en: "Technical Skills", fa: "مهارت‌های فنی" },
      value: technicalSkills.length,
      icon: "fas fa-code",
      color: "from-green-400 to-green-600",
    },
    {
      title: { en: "Soft Skills", fa: "مهارت‌های نرم" },
      value: softSkills.length,
      icon: "fas fa-users",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: { en: "Languages", fa: "زبان‌ها" },
      value: languages.length,
      icon: "fas fa-language",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: { en: "Last Degree", fa: "آخرین مدرک تحصیلی" },
      value:
        i18n.language === "fa"
          ? "کارشناسی نرم‌افزار"
          : "Bachelor's in Software Engineering",
      icon: "fas fa-graduation-cap",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: { en: "Programming Languages", fa: "زبان‌های برنامه‌نویسی" },
      value: "JavaScript, Python",
      icon: "fas fa-laptop-code",
      color: "from-red-400 to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Layout title={t("home")}>
      <div className="px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {t("homes.welcome")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {t("homes.title")}
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-r ${stat.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {i18n.language === "fa" ? stat.title.fa : stat.title.en}
                  </h3>
                  <p
                    className={`${
                      typeof stat.value === "number" ? "text-4xl" : "text-xl"
                    } font-bold text-white`}
                  >
                    {stat.value}
                  </p>
                </div>
                <div className="text-white opacity-80 text-4xl">
                  <i className={stat.icon}></i>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t("homes.more")}
          </p>
        </div>
      </div>

      <Helmet>
        <title>
          {t("resume")} |{" "}
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

export default Home;
