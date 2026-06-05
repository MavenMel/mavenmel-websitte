import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, GraduationCap, DollarSign, Mail, Search, Wrench, AlertTriangle, Clock } from "lucide-react";
import { useState } from "react";

export function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Llamamos a tu función secreta de Netlify
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
      } else {
        alert("Hubo un problema. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  const problems = [
    {
      icon: AlertTriangle,
      text: "Estás tomando decisiones de millones con información incompleta, tardía o poco confiable.",
    },
    {
      icon: Clock,
      text: "Tu equipo trabaja sobre supuestos mientras el margen se erosiona.",
    },
    {
      icon: DollarSign,
      text: "La tecnología está, pero las decisiones críticas siguen llegando tarde o sin respaldo.",
    },
  ];

  const services = [
    {
      icon: Search,
      title: "Diagnóstico",
      description: "Identifica qué decisiones críticas carecen de información confiable y están afectando directamente tus resultados.",
      subtitle: "Claridad en 5 semanas",
      link: "/servicios",
    },
    {
      icon: TrendingUp,
      title: "Coaching Analítico",
      description: "Acompañamiento estratégico para que cada decisión importante esté respaldada por evidencia y mueva el margen.",
      subtitle: "Acompañamiento 1:1",
      link: "/servicios",
    },
    {
      icon: Wrench,
      title: "Atelier",
      description: "Construcción a medida de las piezas que tus decisiones necesitan para ser efectivas, sostenibles y escalables.",
      subtitle: "Construcción a medida",
      link: "/servicios",
    },
    {
      icon: GraduationCap,
      title: "Academy",
      description: "Desarrolla en tu equipo la capacidad de tomar mejores decisiones, más rápido, con impacto directo en la operación.",
      subtitle: "Formación de equipos",
      link: "/servicios",
    },
  ];

  const testimonios = [
    {
      nombre: "Ingrid Carolina Calle Ariza",
      cargo: "Coordinadora de Tecnología · Fundación Santo Domingo",
      curso: "Fundamentos de BI",
    },
    {
      nombre: "Álvaro Pacheco",
      cargo: "Project Manager · Schweitzer Engineering Laboratories (SEL)",
      curso: "Fundamentos de BI",
    },
    {
      nombre: "Daniel Giraldo",
      cargo: "Gerente de Droguerías · Éticos Ltda",
      curso: "Monetización de Datos",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEEDFE] via-white to-[#EEEDFE]/50" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#D4537E] mb-4">
                  El dato es el medio. La decisión es el producto.
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold text-[#26215C] leading-tight">
                  Las decisiones de hoy
                  <br />
                  <span className="text-[#7F77DD]">definen tu P&L de mañana.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-[#26215C]/70 max-w-lg leading-relaxed"
              >
                Trabajo 1:1 con líderes para que sus decisiones críticas dejen de tomarse a ciegas y empiecen a mover el margen.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/diagnostico"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#D4537E]/20"
                >
                  Haz el diagnóstico gratis
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#7F77DD] px-8 py-4 rounded-xl border-2 border-[#7F77DD] hover:bg-[#7F77DD] hover:text-white transition-colors"
                >
                  Agenda tu sesión discovery
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero.jpg"
                  alt="Melisa Tesillo, fundadora de Maven Mel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-[#7F77DD] to-[#D4537E] rounded-2xl -z-10 blur-3xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Credibility Strip */}
      <section className="py-12 bg-white border-y border-[#7F77DD]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
            <p className="text-lg text-[#26215C] font-semibold max-w-xl">
              No vendo tecnología. Hago que la información que ya tienes mueva tu P&amp;L.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-4">
              <div>
                <p className="text-3xl font-bold text-[#7F77DD]">14+</p>
                <p className="text-sm text-[#26215C]/60">años en transformación analítica</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#7F77DD]">1:1</p>
                <p className="text-sm text-[#26215C]/60">acompañamiento a líderes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#7F77DD]">LATAM</p>
                <p className="text-sm text-[#26215C]/60">retail · manufactura · logística</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-[#EEEDFE]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#26215C] mb-6">
              ¿Te suena familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-md"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="text-white" size={32} />
                </div>
                <p className="text-lg text-[#26215C]/80 leading-relaxed">
                  {problem.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xl text-[#26215C]/80 leading-relaxed">
              El problema no es la tecnología. Es que nadie conectó la información con las decisiones que realmente mueven el estado de resultados.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#7F77DD]/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={28} />
                </div>
                {index === 0 && (
                  <span className="inline-block mb-3 text-xs font-bold tracking-wide uppercase text-[#D4537E] bg-[#D4537E]/10 px-3 py-1 rounded-full">
                    Empieza aquí
                  </span>
                )}
                <h3 className="text-2xl font-bold text-[#26215C] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#7F77DD] font-semibold mb-4">
                  {service.subtitle}
                </p>
                <p className="text-[#26215C]/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-[#7F77DD] hover:gap-3 transition-all font-semibold"
                >
                  Conocer más
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#26215C] mb-4">
              Profesionales que se han formado conmigo
            </h2>
            <p className="text-lg text-[#26215C]/60 max-w-2xl mx-auto">
              Líderes y equipos de empresas reales que han pasado por mis programas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((t, index) => (
              <motion.div
                key={t.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#EEEDFE]/40 rounded-2xl p-8 border border-[#7F77DD]/10 flex flex-col"
              >
                <div className="flex-1">
                  <p className="font-bold text-[#26215C] text-lg">{t.nombre}</p>
                  <p className="text-sm text-[#26215C]/60 mt-1">{t.cargo}</p>
                </div>
                <span className="inline-flex items-center gap-2 self-start mt-6 text-xs font-semibold text-[#7F77DD] bg-white px-3 py-1.5 rounded-full border border-[#7F77DD]/20">
                  <GraduationCap size={14} />
                  {t.curso}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-[#26215C]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Decisiones que mueven resultados, cada semana en tu inbox
          </h2>

          {!isSubscribed ? (
            <>
              <p className="text-xl text-white/80 mb-8">
                Perspectivas prácticas para líderes que quieren que su información impacte el estado de resultados.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#7F77DD]"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-semibold whitespace-nowrap disabled:opacity-50"
                  >
                    {isLoading ? "Enviando..." : "Suscribirse"}
                    <Mail size={20} />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-[#7F77DD]/30 p-10 rounded-3xl max-w-md mx-auto"
            >
              <p className="text-2xl font-bold text-white mb-3">¡Bienvenida/o a bordo! 🚀</p>
              <p className="text-white/80">Ya estás en la lista. Pronto recibirás los mejores tips de datos.</p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
