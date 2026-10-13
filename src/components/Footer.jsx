import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footerMain">

        <div className="footerBrand">
          <h3>Andy Louis</h3>

          <p>
            Ingeniero en Computación e Informática
          </p>
        </div>

        <div className="footerSocial">

          <a
            href="#"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

        </div>

      </div>

      <div className="footerBottom">

        <p>
          © {year} Andy Louis. Todos los derechos reservados.
        </p>

        <p>
          Desarrollado con React
        </p>

      </div>

    </footer>
  );
}

export default Footer;