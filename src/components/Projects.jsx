import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  return (
    <section
      className="projects"
      id="proyectos"
    >
      <div className="sectionHeader">
        <p className="sectionLabel">
          MIS PROYECTOS
        </p>

        <h2>Proyectos destacados</h2>

        <p>
          Algunos proyectos desarrollados durante
          mi formación y aprendizaje, aplicando
          tecnologías web, móviles y bases de datos.
        </p>
      </div>

      <div className="projectsGrid">

        {/* PETMEET */}
        <article className="projectCard featuredProject">

          <div className="projectImage">
            <div className="projectPlaceholder">
              PETMEET
            </div>
          </div>

          <div className="projectContent">

            <div className="projectTitleRow">
              <div>
                <span className="projectType">
                  PROYECTO DE TÍTULO
                </span>

                <h3>PetMeet</h3>
              </div>
            </div>

            <div className="projectTags">
              <span>React Native</span>
              <span>Expo</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>

            <p>
              Aplicación móvil para la gestión integral
              del cuidado de mascotas. Integra perfiles,
              historial médico, vacunas, recordatorios,
              servicios, comunidad, mascotas perdidas,
              matches y chat.
            </p>

            <div className="projectLinks">

              <a
                href="#"
                className="projectLink"
              >
                <FaExternalLinkAlt />
                Ver proyecto
              </a>

              <a
                href="#"
                className="projectLink"
              >
                <FaGithub />
                GitHub
              </a>

            </div>
          </div>
        </article>

        {/* PROYECTO 2 */}
        <article className="projectCard">

          <div className="projectImage">
            <div className="projectPlaceholder">
              WEB
            </div>
          </div>

          <div className="projectContent">

            <h3>
              Proyecto Web
            </h3>

            <div className="projectTags">
              <span>JavaScript</span>
              <span>React</span>
            </div>

            <p>
              Próximamente, nuevos proyectos de desarrollo web donde aplicaré mis conocimientos en JavaScript, 
              React y otras tecnologías.
            </p>

            <div className="projectLinks">
              <a
                href="#"
                className="projectLink"
              >
                <FaGithub />
                GitHub
              </a>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}

export default Projects;