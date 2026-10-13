import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

import {
  SiGmail,
} from "react-icons/si";

function Contact() {
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Evita doble envío
    if (enviando) return;

    const form = e.currentTarget;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    // Campo oculto anti-bot
    const website = form.elements.website.value;

    // Si un bot completa este campo, no enviamos nada
    if (website) {
      setEstado("Mensaje enviado correctamente.");
      form.reset();
      return;
    }

    // Validar nombre
    if (name.length < 2 || name.length > 60) {
      setEstado(
        "El nombre debe tener entre 2 y 60 caracteres."
      );
      return;
    }

    // Validar longitud del correo
    if (email.length > 100) {
      setEstado(
        "El correo electrónico es demasiado largo."
      );
      return;
    }

    // Validar formato del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEstado(
        "Ingresa un correo electrónico válido."
      );
      return;
    }

    // Validar mensaje
    if (message.length < 10 || message.length > 1500) {
      setEstado(
        "El mensaje debe tener entre 10 y 1500 caracteres."
      );
      return;
    }

    setEnviando(true);
    setEstado("");

    try {
      // Enviar al endpoint seguro de Vercel.
      // La API key de Resend permanece únicamente en el servidor.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "No se pudo enviar el mensaje."
        );
      }

      setEstado(
        "Mensaje enviado correctamente. ¡Gracias por contactarme!"
      );

      form.reset();
    } catch (error) {
      console.error(
        "Error al enviar mensaje:",
        error
      );

      setEstado(
        "No se pudo enviar el mensaje. Inténtalo nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      className="contact"
      id="contacto"
    >
      <div className="sectionHeader">

        <p className="sectionLabel">
          CONTACTO
        </p>

        <h2>
          Hablemos
        </h2>

        <p>
          ¿Tienes una oportunidad laboral,
          práctica o proyecto en el que pueda
          participar? Puedes contactarme a través
          de cualquiera de estos medios.
        </p>

      </div>

      <div className="contactContainer">

        {/* =========================
            INFORMACIÓN DE CONTACTO
        ========================= */}

        <div className="contactInfo">

          <a
            href="mailto:andylouis107@gmail.com"
            className="contactItem"
          >
            <SiGmail />

            <div>
              <span>
                Correo electrónico
              </span>

              <strong>
                Andylouis107@gmail.com
              </strong>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/andy-louis-3a16a3245/"
            className="contactItem"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />

            <div>
              <span>
                LinkedIn
              </span>

              <strong>
                Ver perfil
              </strong>
            </div>
          </a>

          <a
            href="https://github.com/Andylouis17"
            className="contactItem"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />

            <div>
              <span>
                GitHub
              </span>

              <strong>
                Ver repositorios
              </strong>
            </div>
          </a>

        </div>

        {/* =========================
            FORMULARIO
        ========================= */}

        <div className="contactMessage">

          <div className="contactFormTitle">

            <FaPaperPlane />

            <div>
              <h3>
                Envíame un mensaje
              </h3>

              <p>
                Completa el formulario y
                te responderé lo antes posible.
              </p>
            </div>

          </div>

          <form
            className="contactForm"
            onSubmit={handleSubmit}
          >

            {/* =========================
                HONEYPOT ANTI-BOT
            ========================= */}

            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="website">
                Website
              </label>

              <input
                id="website"
                name="website"
                type="text"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            {/* =========================
                NOMBRE
            ========================= */}

            <div className="formGroup">

              <label htmlFor="name">
                Nombre
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                minLength="2"
                maxLength="60"
                autoComplete="name"
                required
              />

            </div>

            {/* =========================
                CORREO
            ========================= */}

            <div className="formGroup">

              <label htmlFor="email">
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                maxLength="100"
                autoComplete="email"
                required
              />

            </div>

            {/* =========================
                MENSAJE
            ========================= */}

            <div className="formGroup">

              <label htmlFor="message">
                Mensaje
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje..."
                rows="5"
                minLength="10"
                maxLength="1500"
                required
              />

            </div>

            {/* =========================
                BOTÓN
            ========================= */}

            <button
              type="submit"
              className="sendButton"
              disabled={enviando}
            >
              <FaPaperPlane />

              {enviando
                ? "Enviando..."
                : "Enviar mensaje"}
            </button>

            {/* =========================
                ESTADO DEL ENVÍO
            ========================= */}

            {estado && (
              <p
                className="formStatus"
                aria-live="polite"
              >
                {estado}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
