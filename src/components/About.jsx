import {
  FaGraduationCap,
  FaBullseye,
  FaHeart,
} from "react-icons/fa";

function About() {
  return (
    <section
      className="about aboutNoImage"
      id="sobre-mi"
    >
      <div className="aboutContent">

        <p className="sectionLabel">
          SOBRE MÍ
        </p>

        <h2>
          Un poco sobre mí
        </h2>

        <div className="aboutText">

          <p>
            Soy egresado de Ingeniería en Computación e Informática,
            apasionado por la tecnología y el desarrollo de soluciones
            que realmente aporten valor.
          </p>

          <p>
            Me interesa especialmente el desarrollo de aplicaciones web
            y móviles. Durante mi formación he trabajado con tecnologías
            como JavaScript, React Native, Expo, Node.js y PostgreSQL.
          </p>

          <p>
            Actualmente busco seguir fortaleciendo mis conocimientos,
            participar en proyectos reales y continuar creciendo
            profesionalmente como desarrollador.
          </p>

        </div>

        <div className="aboutCards">

          <article>
            <FaGraduationCap className="aboutIcon" />

            <div>
              <h3>Egresado</h3>

              <p>
                Ingeniería en Computación e Informática
              </p>
            </div>
          </article>

          <article>
            <FaBullseye className="aboutIcon" />

            <div>
              <h3>Objetivo</h3>

              <p>
                Crecer profesionalmente como desarrollador
                de software
              </p>
            </div>
          </article>

          <article>
            <FaHeart className="aboutIcon" />

            <div>
              <h3>Intereses</h3>

              <p>
                Desarrollo web, mobile, backend y nuevas
                tecnologías
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default About;