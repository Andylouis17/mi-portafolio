import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  
} from "react-icons/fa";

import {
  SiPostgresql,
  SiExpo,
} from "react-icons/si";

function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
    >
      {/* =========================
          CONTENIDO PRINCIPAL
      ========================= */}
      <div className="heroContent">

        <p className="heroHello">
          Hola, soy
        </p>

        <h1>
          Andy <span>Louis</span>
        </h1>

        <h2>
          Ingeniero en Computación e Informática (Egresado)
        </h2>

        <p className="heroDescription">
          Desarrollador de aplicaciones web y móviles,
          enfocado en JavaScript, React Native, Expo,
          Node.js y PostgreSQL.
        </p>

        {/* BOTONES */}
        <div className="heroButtons">

          <a
            href="#proyectos"
            className="primaryButton"
          >
            Ver proyectos
            <span>→</span>
          </a>

          {/* BOTÓN GITHUB */}
{/* GITHUB */}
{/* GITHUB */}
<a
  href="https://github.com/Andylouis17"
  className="secondaryButton"
  aria-label="Visitar mi GitHub"
>
  <FaGithub />
  GitHub
</a>

{/* LINKEDIN */}
{/* LINKEDIN */}
<a
  href="https://www.linkedin.com/in/andy-louis-3a16a3245/"
  className="secondaryButton linkedinButton"
  aria-label="Visitar mi LinkedIn"
>
  <FaLinkedin />
  LinkedIn
</a>
            {/* BOTÓN CV */}
<a
  href="/cv/Andy-Louis-CV.pdf"
  className="secondaryButton cvButton"
  aria-label="Ver y descargar mi currículum"
  title="Ver y descargar CV"
>
  <FaDownload />
  CV
</a>

        </div>

        {/* =========================
            TECNOLOGÍAS
        ========================= */}
        <div className="heroTechnologies">

          <div>
            <FaJs />
            <span>JavaScript</span>
          </div>

          <div>
            <FaReact />
            <span>React Native</span>
          </div>

          <div>
            <SiExpo />
            <span>Expo</span>
          </div>

          <div>
            <SiPostgresql />
            <span>PostgreSQL</span>
          </div>

          <div>
            <FaNodeJs />
            <span>Node.js</span>
          </div>

          <div>
            <FaGitAlt />
            <span>Git</span>
          </div>

        </div>

      </div>

      {/* =========================
          IMAGEN DEL NOTEBOOK
      ========================= */}
      <div className="heroImage">

        <img
          src="/images/programming.jpg"
          alt="Notebook con entorno de desarrollo"
        />

      </div>

      {/* =========================
          INDICADOR INFERIOR
      ========================= */}
      <a
        href="#sobre-mi"
        className="heroScroll"
      >
       
      </a>

    </section>
  );
}

export default Hero;