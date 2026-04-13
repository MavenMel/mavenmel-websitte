// Función para capturar leads del Diagnóstico de Madurez Analítica
// Lista Brevo: #8 Diagnóstico
export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Método no permitido", { status: 405 });
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
        "api-key": process.env.BREVO_API_KEY as string,
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
      const errorData = await response.json();
      return new Response(
        JSON.stringify({ error: errorData.message }),
        { status: 500 }
      );
    }
  } catch {
    return new Response(
      JSON.stringify({ error: "Error de servidor" }),
      { status: 500 }
    );
  }
};
