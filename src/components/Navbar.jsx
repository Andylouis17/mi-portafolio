import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar({
  darkMode,
  setDarkMode,
}) {
  return (
    <nav className="navbar">

      <div className="logo">
        AL
      </div>

      <div className="navLinks">

        <a href="#inicio">
          Inicio
        </a>

        <a href="#sobre-mi">
          Sobre mí
        </a>

        <a href="#proyectos">
          Proyectos
        </a>

        <a href="#tecnologias">
          Tecnologías
        </a>
        
        <a href="#certifications">
         Certificaciones
        </a>

        <a href="#contacto">
          Contacto
        </a>

      </div>

      <button
        className="themeButton"
        type="button"
        onClick={() =>
          setDarkMode(!darkMode)
        }
        aria-label={
          darkMode
            ? "Activar modo claro"
            : "Activar modo oscuro"
        }
      >
        {darkMode ? (
          <FaSun />
        ) : (
          <FaMoon />
        )}
      </button>

    </nav>
  );
}

export default Navbar;