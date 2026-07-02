// Función para capturar leads del Diagnóstico de Madurez Analítica
// Lista Brevo: #8 Diagnóstico
export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Método no permitido", { status: 405 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    // Falta la variable de entorno: no llamamos a Brevo con una key vacía
    // (así el usuario nunca ve el error crudo "authentication not found in headers").
    console.error("[diagnostico-lead] Falta BREVO_API_KEY en el entorno de Netlify.");
    return new Response(
      JSON.stringify({ error: "No pudimos registrar tus datos en este momento. Intenta de nuevo más tarde." }),
      { status: 500 }
    );
  }

  try {
    const { email, nombre, telefono, empresa } = await req.json();

    if (!email || !nombre) {
      return new Response(
        JSON.stringify({ error: "Nombre y email son requeridos" }),
        { status: 400 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: nombre,
          SMS: telefono || "",
          COMPANY: empresa || "",
        },
        listIds: [8], // Diagnóstico
        updateEnabled: true,
      }),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ message: "Lead registrado con éxito" }),
        { status: 200 }
      );
    } else {
      // Registramos el error real de Brevo en los logs de la función,
      // pero NO se lo mostramos al usuario final.
      const errorData = await response.json().catch(() => ({}));
      console.error("[diagnostico-lead] Error de Brevo:", response.status, errorData);
      return new Response(
        JSON.stringify({ error: "No pudimos registrar tus datos en este momento. Intenta de nuevo más tarde." }),
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[diagnostico-lead] Error de servidor:", err);
    return new Response(
      JSON.stringify({ error: "Error de servidor. Intenta de nuevo." }),
      { status: 500 }
    );
  }
};
