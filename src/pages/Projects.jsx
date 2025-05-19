import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

export const projectList = [
  {
    id: 1,
    title: { en: "Personnel Management System", fa: "سامانه مدیریت پرسنل" },
    description: {
      en: "A personnel management system for managing employees, vacations, and various statuses such as shifts and breaks with a hierarchical structure.",
      fa: "یک سامانه مدیریت پرسنل برای مدیریت کارکنان، مرخصی‌ها و وضعیت‌های مختلف مانند شیفت‌ها و استراحت‌ها با ساختار سلسله مراتبی.",
    },
    image: "./images/personnel_management.png",
    technologies: ["Express", "Vue", "Quasar", "SQL Server"],
  },
  {
    id: 2,
    title: {
      en: "Real Estate Management System for Android",
      fa: "سامانه مدیریت املاک برای اندروید",
    },
    description: {
      en: "A real estate management system for Android that allows applicants and files to be registered, files to be searched, and SMS notifications to be sent to applicants.",
      fa: "یک سامانه مدیریت املاک برای اندروید که امکان ثبت متقاضیان و فایل‌ها، جستجوی فایل‌ها و ارسال پیامک به متقاضیان را فراهم می‌کند.",
    },
    image: "./images/real_estate_management_android.png",
    technologies: ["B4A", "PHP", "MySQL"],
  },
  {
    id: 3,
    title: {
      en: "Automatic Library Reservation Bot",
      fa: "ربات رزرو خودکار کتابخانه",
    },
    description: {
      en: "A bot for automating library reservations based on user requests, integrated with an API.",
      fa: "رباتی برای رزرو خودکار کتابخانه بر اساس درخواست‌های کاربر که با یک API یکپارچه شده است.",
    },
    image: "./images/library_reservation_bot.png",
    technologies: ["React", "MUI"],
  },
  {
    id: 4,
    title: { en: "Kalimba Note Teaching App", fa: "پروژه آموزش ساز کالیبما" },
    description: {
      en: "An interactive app for teaching Kalimba notes, still in progress, built with React Native Expo and Express.",
      fa: "یک اپلیکیشن تعاملی برای آموزش نت‌های کالیبما که هنوز در حال تکمیل است و با استفاده از React Native Expo و Express ساخته شده است.",
    },
    image: "./images/kalimba_teaching_app.png",
    technologies: ["React Native Expo", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: {
      en: "Nurses Shift Management System",
      fa: "پروژه مدیریت شیفت پرستاران",
    },
    description: {
      en: "A system for automatically scheduling nurse shifts based on requests and generating shift schedules in PDF format.",
      fa: "یک سیستم برای چیدن خودکار شیفت‌های پرستاران بر اساس درخواست‌ها و تولید برنامه‌های شیفت به فرمت PDF.",
    },
    image: "./images/nurses_shift_management.png",
    technologies: ["Python", "Qt", "SQLite"],
  },
  {
    id: 6,
    title: {
      en: "Comprehensive Real Estate Management System",
      fa: "سیستم جامع مدیریت املاک",
    },
    description: {
      en: "A complete real estate management system for property offices, still in progress, built with React, Express, and PostgreSQL.",
      fa: "یک سیستم کامل مدیریت املاک برای دفاتر املاک که هنوز در حال تکمیل است و با استفاده از React، Express و PostgreSQL ساخته شده است.",
    },
    image: "./images/real_estate_management.png",
    technologies: ["React", "Express", "PostgreSQL"],
  },
  {
    id: 7,
    title: { en: "Anonymous Chatbot on Telegram", fa: "ربات چت ناشناس تلگرام" },
    description: {
      en: "A chatbot for finding friends and chatting anonymously on Telegram.",
      fa: "یک ربات چت برای یافتن دوست و چت ناشناس در تلگرام.",
    },
    image: "./images/anonymous_chatbot.png",
    technologies: ["Express", "MongoDB"],
  },
  {
    id: 8,
    title: { en: "Movie Search Bot", fa: "ربات فیلم یاب" },
    description: {
      en: "A bot that helps to search for movies from IMDB using Python.",
      fa: "رباتی که به کمک پایتون برای جستجوی فیلم‌ها از IMDB ساخته شده است.",
    },
    image: "./images/movie_search_bot.jpg",
    technologies: ["Python"],
  },
  {
    id: 9,
    title: { en: "Website Monitoring Bot", fa: "ربات مانیتورینگ وبسایت" },
    description: {
      en: "A Python bot that monitors a website and sends requests when necessary via an API.",
      fa: "ربات پایتونی که یک وبسایت را رسد می‌کند و در مواقع لازم درخواستی را ارسال می‌کند.",
    },
    image: "./images/website_monitoring_bot.png",
    technologies: ["Python"],
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedTechs, setSelectedTechs] = useState([]);

  const technologies = useMemo(() => {
    const techSet = new Set();
    projectList.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return ["all", ...Array.from(techSet)];
  }, []);

  const toggleTechSelection = (tech) => {
    setSelectedTechs((prevSelectedTechs) =>
      prevSelectedTechs.includes(tech)
        ? prevSelectedTechs.filter((item) => item !== tech)
        : [...prevSelectedTechs, tech]
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0 || selectedTechs.includes("all"))
      return projectList;
    return projectList.filter(
      (project) =>
        selectedTechs.some((tech) => project.technologies.includes(tech)) // تغییر شرط اینجا
    );
  }, [selectedTechs]);

  return (
    <Layout title={t("projects")}>
      <div className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTechSelection(tech)}
              className={`px-4 py-2 rounded-full transition-all duration-200 
                ${
                  selectedTechs.includes(tech)
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
