import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpo,
  SiPostgresql,
} from "react-icons/si";

function Technologies() {
  const technologies = [
    {
      name: "JavaScript",
      className: "javascript",
      description: "Lenguaje principal para desarrollo web.",
      icon: <FaJs />,
    },
    {
      name: "React",
      className: "react",
      description: "Desarrollo de interfaces web modernas.",
      icon: <FaReact />,
    },
    {
      name: "React Native",
      className: "react-native",
      description: "Desarrollo de aplicaciones móviles.",
      icon: <FaReact />,
    },
    {
      name: "Expo",
      className: "expo",
      description: "Herramientas para desarrollo móvil con React Native.",
      icon: <SiExpo />,
    },
    {
      name: "Node.js",
      className: "nodejs",
      description: "Desarrollo de servidores y APIs REST.",
      icon: <FaNodeJs />,
    },
    {
      name: "PostgreSQL",
      className: "postgresql",
      description: "Base de datos relacional.",
      icon: <SiPostgresql />,
    },
    {
      name: "HTML5",
      className: "html",
      description: "Estructura de aplicaciones y sitios web.",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      className: "css",
      description: "Diseño y adaptación responsive.",
      icon: <FaCss3Alt />,
    },
    {
      name: "Git",
      className: "git",
      description: "Control de versiones de proyectos.",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      className: "github",
      description: "Repositorios y gestión de código.",
      icon: <FaGithub />,
    },
  ];

  return (
    <section
      className="technologies"
      id="tecnologias"
    >
      <div className="sectionHeader">
        <p className="sectionLabel">
          TECNOLOGÍAS
        </p>

        <h2>
          Stack tecnológico
        </h2>

        <p>
          Estas son algunas de las tecnologías y
          herramientas que utilizo en mis proyectos
          académicos y personales.
        </p>
      </div>

      <div className="technologiesGrid">
        {technologies.map((technology) => (
          <article
            className="technologyCard"
            key={technology.name}
          >
            <div
              className={`technologyIcon ${technology.className}`}
            >
              {technology.icon}
            </div>

            <h3>
              {technology.name}
            </h3>

            <p>
              {technology.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Technologies;