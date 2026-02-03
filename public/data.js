window.APP_DATA = {
  bio: {
    fullName: {
      en: "Asghar Abedini",
      fa: "اصغر عابدینی",
    },
    fieldOfStudy: {
      en: "Software Engineering",
      fa: "مهندسی نرم‌افزار",
    },
    currentLocation: {
      en: "Tehran",
      fa: "تهران",
    },
    birthYearShamsi: 1375,
    birthYearGregorian: 1996,
  },

  projects: [
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
      id: 10,
      title: { en: "PetIran Platform", fa: "پلتفرم پتیران" },
      link: "https://pet-iran.com/fa",
      description: {
        en: "Front-end development of a service marketplace platform built with Vue.js where providers can register and manage their services. Implemented responsive UI, forms, dashboards, and client-side interactions.",
        fa: "توسعه فرانت‌اند یک پلتفرم مارکت‌پلیس خدمات حیوانات خانگی با استفاده از Vue.js که در آن ارائه‌دهندگان می‌توانند خدمات خود را ثبت و مدیریت کنند. پیاده‌سازی رابط کاربری واکنش‌گرا، فرم‌ها، داشبوردها و تعاملات سمت کاربر.",
      },
      image: "./images/petiran.png",
      technologies: ["Vue"],
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
      title: {
        en: "Anonymous Chatbot on Telegram",
        fa: "ربات چت ناشناس تلگرام",
      },
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
  ],

  technicalSkills: [
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 70 },
    { name: "Vue", percentage: 85 },
    { name: "Express", percentage: 85 },
    { name: "Python", percentage: 85 },
    { name: "SQL Server", percentage: 85 },
    { name: "MongoDB", percentage: 70 },
    { name: "Machine Learning", percentage: 60 },
    { name: "Software Skills", percentage: 90 },
  ],

  softSkills: [
    { en: "Good Listener", fa: "شنونده خوب" },
    { en: "Responsibility", fa: "مسئولیت‌پذیری" },
    { en: "Innovation", fa: "نوآوری" },
    { en: "Accepting Criticism", fa: "انتقادپذیری" },
    { en: "Creativity and Idea Generation", fa: "خلاقیت و ایده‌پردازی" },
    { en: "Problem Solving", fa: "مهارت حل مساله" },
    { en: "Sense of Humor", fa: "شوخ طبعی" },
    { en: "Providing Feedback", fa: "ارائه فیدبک" },
    { en: "Teaching", fa: "آموزش دادن" },
  ],

  languages: [
    { name: { en: "Persian", fa: "فارسی" }, stars: 5 },
    { name: { en: "Turkish", fa: "ترکی" }, stars: 4 },
    { name: { en: "English", fa: "انگلیسی" }, stars: 2 },
    { name: { en: "German", fa: "آلمانی" }, stars: 1 },
  ],

  educations: [
    {
      degree: "educations.associateDegree",
      university: {
        en: "Shahid Shamshipoor College",
        fa: "دانشکده شهید شمسی پور",
      },
      gpa: 16,
      graduationDate: {
        en: 2017,
        fa: 1396,
      },
    },
    {
      degree: "educations.bachelorDegree",
      university: {
        en: "Shahid Shamshipoor College",
        fa: "دانشکده شهید شمسی پور",
      },
      gpa: 16,
      graduationDate: {
        en: 2019,
        fa: 1398,
      },
    },
  ],

  courses: [
    {
      title: {
        en: "Practical Training in Git",
        fa: "دوره آموزش عملی کار با گیت",
      },
      year: {
        en: 2025,
        fa: 1403,
      },
      certificateLink:
        "https://quera.org/media/public/quera_certificate/c218996987944aa6bb59a996e3b161bf.jpg",
      site: "quera.org",
    },
    {
      title: {
        en: "Jump Front-End with React",
        fa: "جامپ فرانت‌اند با ری‌اکت (React)",
      },
      year: {
        en: 2022,
        fa: 1401,
      },
      certificateLink:
        "https://quera.org/media/public/quera_certificate/fc73093430e749aba7417d3471182bef.jpg",
      site: "quera.org",
    },
    {
      title: {
        en: "Advanced Python Programming",
        fa: "برنامه‌نویسی پایتون پیشرفته",
      },
      year: {
        en: 2022,
        fa: 1401,
      },
      certificateLink:
        "https://quera.org/media/public/quera_certificate/3a708703edc940c4a0ad7df37c995272.jpg",
      site: "quera.org",
    },
    {
      title: {
        en: "Comprehensive NodeJs Training",
        fa: "دوره آموزش جامع NodeJs",
      },
      year: {
        en: 2021,
        fa: 1400,
      },
      certificateLink: "",
      site: "toplearn.com",
    },
    {
      title: {
        en: "Introduction to Deep Learning",
        fa: "یادگیری عمیق مقدماتی",
      },
      year: {
        en: 2022,
        fa: 1401,
      },
      certificateLink: null, // این دوره عکس گواهینامه ندارد
      site: "robotech-academy.com",
    },
  ],

  experiences: [
    {
      company: { en: "Real Estate Office", fa: "دفتر املاک" },
      position: {
        en: "Consultant & Internal Manager",
        fa: "مشاور و مدیر داخلی",
      },
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
  ],
};
