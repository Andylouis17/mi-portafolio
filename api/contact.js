import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Solo permitimos POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método no permitido.",
    });
  }

  try {
    const { name, email, message, website } = req.body || {};

    // Honeypot contra bots
    if (website) {
      return res.status(200).json({
        success: true,
        message: "Mensaje recibido.",
      });
    }

    // Validar que todos los campos existan
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Datos inválidos.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    // Validar nombre
    if (cleanName.length < 2 || cleanName.length > 60) {
      return res.status(400).json({
        success: false,
        message: "El nombre debe tener entre 2 y 60 caracteres.",
      });
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      cleanEmail.length > 100 ||
      !emailRegex.test(cleanEmail)
    ) {
      return res.status(400).json({
        success: false,
        message: "Correo electrónico inválido.",
      });
    }

    // Validar mensaje
    if (cleanMessage.length < 10 || cleanMessage.length > 1500) {
      return res.status(400).json({
        success: false,
        message: "El mensaje debe tener entre 10 y 1500 caracteres.",
      });
    }

    // Enviar correo
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      // Durante las pruebas enviaremos el correo
      // a la cuenta asociada a Resend.
      to: ["andylouis107@gmail.com"],

      subject: `Nuevo mensaje de ${cleanName} - Portafolio`,

      replyTo: cleanEmail,

      text: `
Nuevo mensaje desde tu portafolio

Nombre:
${cleanName}

Correo:
${cleanEmail}

Mensaje:
${cleanMessage}
      `.trim(),
    });

    if (error) {
      console.error("Error de Resend:", error);

      return res.status(500).json({
        success: false,
        message: "No se pudo enviar el mensaje.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Mensaje enviado correctamente.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Error en /api/contact:", error);

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor.",
    });
  }
}

