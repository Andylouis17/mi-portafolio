import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCisco } from "react-icons/si";

function Certifications() {
  const certifications = [
    {
      title: "CyberOps Associate",
      institution: "Cisco Networking Academy · UNAB",
      date: "Septiembre 2026",
      description:
        "Formacion orientada a operaciones de ciberseguridad, monitoreo, analisis y respuesta ante amenazas.",
      certificate: "/certificates/cyberops-associate.pdf",
    },
    {
      title: "Introduccion a Ciberseguridad",
      institution: "Cisco Networking Academy · UNAB",
      date: "Septiembre 2026",
      description:
        "Fundamentos de ciberseguridad, amenazas digitales, proteccion de datos y buenas practicas de seguridad.",
      certificate: "/certificates/introduccion-ciberseguridad.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="sectionHeader">
        <p className="sectionLabel">
        FORMACION CONTINUA
      </p>
        <h2>Certificaciones</h2>
        <p>
          Certificaciones obtenidas durante mi formacion en tecnologi­a,
          redes y ciberseguridad.
        </p>
      </div>

      <div className="certificationsGrid">
        {certifications.map((certification) => (
          <article
            className="certificationCard"
            key={certification.title}
          >
            <div className="certificationIcon cisco">
             <SiCisco />
            </div>

            <div className="certificationContent">
              <span className="certificationIssuer">
                Cisco Networking Academy
              </span>

              <h3>{certification.title}</h3>

              <p className="certificationInstitution">
                {certification.institution}
              </p>

              <p className="certificationDate">
                {certification.date}
              </p>

              <p className="certificationDescription">
                {certification.description}
              </p>

              <a
                href={certification.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="certificationButton"
              >
                Ver certificado
                <FaExternalLinkAlt />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
