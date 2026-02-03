import { useTranslation } from "react-i18next";

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  link=null
}) => {
  const { i18n } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/default-project.jpg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
          {i18n.language === "fa" ? title.fa : title.en}
          {}
          {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt text-gray-500 dark:text-gray-300"></i>
          </a>
        )}
      </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {i18n.language === "fa" ? description.fa : description.en}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
