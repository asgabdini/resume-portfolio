import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    company: { en: "Real Estate Office", fa: "دفتر املاک" },
    position: { en: "Consultant & Internal Manager", fa: "مشاور و مدیر داخلی" },
    period: { en: "2016-2023", fa: "1395-1402" },
    description: [
      {
        en: "Designed various forms for internal use and streamlined operations",
        fa: "طراحی فرم‌های مختلف برای استفاده داخلی و تسهیل عملیات",
      },
      {
        en: "Developed an application to manage various tasks such as registering files, clients, and properties",
        fa: "توسعه اپلیکیشنی برای مدیریت کارهای مختلف مانند ثبت فایل‌ها، مشتریان",
      },
      {
        en: "Implemented smart property search functionality for clients",
        fa: "اجرای جستجوی هوشمند ملک برای مشتریان",
      },
      {
        en: "Integrated SMS system to send property details to clients",
        fa: "سیستم پیامک برای ارسال جزئیات ملک به مشتریان",
      },
      {
        en: "Implemented a feature to register new properties from the Divar website",
        fa: "ویژگی برای ثبت املاک جدید از سایت دیوار",
      },
      {
        en: "Developed a property price estimation system based on Divar listings and registered properties",
        fa: "سیستم تخمین قیمت ملک بر اساس آگهی‌های دیوار و املاک ثبت‌شده",
      },
    ],
  },
  {
    company: { en: "Military Service", fa: "در خدمت سربازی" },
    position: {
      en: "Personnel Management System Developer & Support",
      fa: "توسعه‌دهنده و پشتیبان سیستم مدیریت پرسنل",
    },
    period: { en: "2023-2024", fa: "1402-1403" },
    description: [
      {
        en: "Developed and supported a personnel management system that reduced leave and rest violations to near zero",
        fa: "توسعه و پشتیبانی سیستم مدیریت پرسنل که تخلفات مرخصی و استراحت را به حد صفر رساند",
      },
      {
        en: "Ensured accurate statistics and data availability for the department",
        fa: "اطمینان از دسترسی به آمار و داده‌های دقیق برای بخش مربوطه",
      },
    ],
  },
];

const Experience = () => {
  const { t, i18n } = useTranslation();

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
    </Layout>
  );
};

export default Experience;
