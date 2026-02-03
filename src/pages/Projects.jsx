import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import { useAppData } from "../contexts/AppDataContext";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selectedTechs, setSelectedTechs] = useState([]);

  const { projects, bio } = useAppData();

  const technologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return ["all", ...Array.from(techSet)];
  }, []);

  const toggleTechSelection = (tech) => {
    setSelectedTechs((prevSelectedTechs) =>
      prevSelectedTechs.includes(tech)
        ? prevSelectedTechs.filter((item) => item !== tech)
        : [...prevSelectedTechs, tech],
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0 || selectedTechs.includes("all"))
      return projects;
    return projects.filter(
      (project) =>
        selectedTechs.some((tech) => project.technologies.includes(tech)), // تغییر شرط اینجا
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
      <Helmet>
        <title>
          {t("projects")} |{" "}
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

export default Projects;
