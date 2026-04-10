import { motion } from "motion/react";
import { ExternalLink, Calendar, Video } from "lucide-react";

export function Redes() {
  const charlas = [
    {
      titulo: "Transformación Digital e IA",
      lugar: "Universidad de San Buenaventura",
      fecha: "2023",
      descripcion:
        "Docencia sobre Marketing Digital y adopción tecnológica.",
      link: "#",
    },
    {
      titulo: "Gestión del Cambio en Proyectos IT",
      lugar: "Conferencia Enterprise",
      fecha: "2024",
      descripcion:
        "Cómo lograr que los equipos adopten nuevas herramientas como Salesforce o SAP.",
      link: "#",
    },
  ];

  // IDs de los videos que compartiste (extraídos de tus links)
  const videos = [
    { id: "tM67GrNWGig", titulo: "Participación en Evento" },
    { id: "5OYL4LpMVN0", titulo: "Entrevista / Charla 1" },
    { id: "9zYZAUiBhjU", titulo: "Entrevista / Charla 2" },
    { id: "s7jK_q1o250", titulo: "Entrevista / Charla 3" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#26215C] mb-12">
          Eventos & Charlas
        </h1>

        {/* Tarjetas de eventos actuales */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {charlas.map((c) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={c.titulo}
              className="p-8 rounded-3xl bg-[#EEEDFE]/50 border border-[#7F77DD]/20"
            >
              <div className="flex items-center gap-2 text-[#7F77DD] mb-4">
                <Calendar size={18} />
                <span className="text-sm font-bold">
                  {c.fecha}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#26215C] mb-2">
                {c.titulo}
              </h3>
              <p className="text-[#7F77DD] font-medium mb-4">
                {c.lugar}
              </p>
              <p className="text-[#26215C]/70 mb-6">
                {c.descripcion}
              </p>
              <a
                href={c.link}
                className="inline-flex items-center gap-2 text-[#D4537E] font-bold"
              >
                Ver detalles <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Nueva sección de Galería de Videos */}
        <h2 className="text-3xl font-bold text-[#26215C] mb-8 flex items-center gap-3">
          <Video className="text-[#D4537E]" /> Participaciones
          en Video
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((v) => (
            <motion.div
              key={v.id}
              whileHover={{ scale: 1.01 }}
              className="group p-4 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-2xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="font-bold text-[#26215C] px-2">
                {v.titulo}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}