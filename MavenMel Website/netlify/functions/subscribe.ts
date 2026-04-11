export default async (req: Request) => {
  // Solo aceptamos peticiones de tipo POST
  if (req.method !== "POST") {
    return new Response("Método no permitido", { status: 405 });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email requerido" }), { status: 400 });
    }

    // Llamada a la API de Brevo con tu lista ID 7
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string, 
      },
      body: JSON.stringify({
        email: email,
        listIds: [7], // <--- ¡ID ACTUALIZADO A 7!
        updateEnabled: true
      })
    });

    if (response.ok) {
      return new Response(JSON.stringify({ message: "Suscrito con éxito" }), { status: 200 });
    } else {
      const errorData = await response.json();
      return new Response(JSON.stringify({ error: errorData.message }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error de servidor" }), { status: 500 });
  }
};
