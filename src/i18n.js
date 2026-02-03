import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const userLanguage = navigator.language || navigator.userLanguage; // زبان پیش‌فرض مرورگر کاربر
const savedLanguage = localStorage.getItem("language");

const defaultLanguage =
  savedLanguage === "fa" || savedLanguage === "en"
    ? savedLanguage
    : userLanguage.startsWith("fa")
      ? "fa"
      : "en";

const setDirection = (lng) => {
  if (lng === "fa") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }
};

setDirection(defaultLanguage);

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        skill: "Skills",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        switchLanguage: "Switch Language",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        toggleTheme: "Toggle Theme",
        resume: "Resume",

        homes: {
          welcome: "Welcome",
          title: "Overview of my skills and experience",
          more: "Check out different sections for more details",
        },
        aboutMe: {
          fullName: "Full Name",
          age: "Age",
          education: "Education",
          location: "Location",
          bio: "Bio",
        },
        educations: {
          associateDegree: "Associate Degree",
          bachelorDegree: "Bachelor's Degree",
          universityName: "Shahid Shamsipour Technical College",
          gpa: "GPA",
          graduationDate: "Graduation Date",
          year: "Year",
          courses: "Courses",
          certificate: "Certificate",
        },
        skills: {
          skillsHeading: "Skills",
          softSkills: "Soft Skills",
          technicalSkills: "Technical Skills",
          languages: "Languages",
        },
        notFound: {
          notFoundMessage: "Oops! The page you're looking for doesn't exist.",
          returnHome: "Return to Home",
        },
      },
    },
    fa: {
      translation: {
        home: "خانه",
        about: "درباره من",
        projects: "پروژه‌ها",
        skill: "مهارت‌ها",
        experience: "تجربه کاری",
        education: "تحصیلات",
        contact: "تماس با من",
        switchLanguage: "تغییر زبان",
        darkMode: "حالت تاریک",
        lightMode: "حالت روشن",
        toggleTheme: "تغییر تم",
        resume: " رزومه",
        homes: {
          welcome: "خوش آمدید",
          title: "نمای کلی از مهارت‌ها و تجربیات من",
          more: "برای اطلاعات بیشتر، بخش‌های مختلف را مشاهده کنید",
        },

        aboutMe: {
          fullName: "نام و نام خانوادگی",
          age: "سن",
          education: "تحصیلات",
          location: "مکان",
          bio: "زندگی نامه",
        },
        educations: {
          associateDegree: "کاردانی",
          bachelorDegree: "کارشناسی",
          universityName: "دانشکده فنی شهید شمسی پور",
          gpa: "معدل",
          graduationDate: "تاریخ فارغ‌التحصیلی",
          year: "سال برگزاری",
          courses: "دوره‌های آموزشی",
          certificate: "گواهینامه",
        },
        skills: {
          skillsHeading: "مهارت‌ها",
          softSkills: "مهارت‌های نرم",
          technicalSkills: "مهارت‌های فنی",
          languages: "زبان‌ها",
        },
        notFound: {
          notFoundMessage: "اوه! صفحه‌ای که دنبالش می‌گردید وجود ندارد.",
          returnHome: "بازگشت به خانه",
        },
      },
    },
  },
  lng: defaultLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
  setDirection(lng);
});

export default i18n;
