import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, GraduationCap, FileSpreadsheet, BarChart3, DollarSign, Mail } from "lucide-react";
import { useState } from "react";

export function Home() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const problems = [
    {
      icon: FileSpreadsheet,
      text: "Tienes Power BI pero sigues exportando a Excel",
    },
    {
      icon: BarChart3,
      text: "Tus dashboards existen pero nadie los usa",
    },
    {
      icon: DollarSign,
      text: "Invertiste en tecnología pero no ves el ROI",
    },
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Coach Analítica",
      description: "Metodología de preguntas poderosas para que saques el máximo de tus datos",
      subtitle: "Sesiones 1:1 para líderes",
      link: "/servicios",
    },
    {
      icon: Users,
      title: "Fractional CIO/CDO",
      description: "Dirección estratégica de tecnología y datos sin el costo de un ejecutivo full-time",
      subtitle: "Liderazgo tech part-time",
      link: "/servicios",
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Capacitación para equipos que quieren hablar el idioma de los datos",
      subtitle: "Cursos, workshops, charlas",
      link: "/servicios",
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
                <h1 className="text-5xl lg:text-7xl font-bold text-[#26215C] leading-tight">
                  Tus datos ya hablan.
                  <br />
                  <span className="text-[#7F77DD]">Aprende a escucharlos.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-[#26215C]/70 max-w-lg leading-relaxed"
              >
                Coaching analítico 1:1 para líderes que quieren convertir su tecnología en resultados de negocio
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#D4537E]/20"
                >
                  Agenda tu sesión discovery
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/diagnostico"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#7F77DD] px-8 py-4 rounded-xl border-2 border-[#7F77DD] hover:bg-[#7F77DD] hover:text-white transition-colors"
                >
                  Haz el diagnóstico gratis
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
                  src="https://lh3.googleusercontent.com/u/0/d/1ODLsQqzu8TLkI4QqaGfb1h3u-lEQEgXd"
                  alt="Business leader analyzing data"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-[#7F77DD] to-[#D4537E] rounded-2xl -z-10 blur-3xl opacity-20" />
            </motion.div>
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
              No es que los datos sean difíciles. Es que nadie te enseñó a hacerles las preguntas correctas.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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
            Insights semanales directo a tu inbox
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Tips prácticos para líderes que quieren dominar sus datos
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
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
                className="bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold whitespace-nowrap"
              >
                Suscribirse
                <Mail size={20} />
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
