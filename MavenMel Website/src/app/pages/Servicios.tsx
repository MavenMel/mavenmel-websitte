import { motion } from "motion/react";
import { TrendingUp, Users, GraduationCap, Check, ArrowRight, Video, FileText, Users2, BookOpen, Presentation, Target } from "lucide-react";
import { Link } from "react-router";

export function Servicios() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#EEEDFE] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#26215C] mb-6">
              Servicios
            </h1>
            <p className="text-xl text-[#26215C]/70">
              Te enseño a utilizar la tecnología a tu favor de manera sencilla y clara
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coach Analítica */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-[#26215C] mb-4">
                Coach Analítica
              </h2>
              <p className="text-lg text-[#26215C]/80 mb-6 leading-relaxed">
                Sesiones personalizadas 1:1 donde trabajo contigo (no con tu equipo técnico) para que puedas entender qué te dicen tus datos, conectar métricas con decisiones de negocio, y liderar con evidencia en lugar de intuición.
              </p>

              <div className="bg-[#EEEDFE]/50 rounded-xl p-6 mb-6">
                <p className="text-sm font-semibold text-[#26215C]/60 mb-2">Formato</p>
                <p className="text-lg text-[#26215C] mb-4">
                  Sesiones de 1-2 horas vía videollamada
                </p>

                <p className="text-sm font-semibold text-[#26215C]/60 mb-3">Incluye</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#7F77DD] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#26215C]/80">Formulario de contexto previo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#7F77DD] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#26215C]/80">Sesión de coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#7F77DD] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#26215C]/80">Resumen de acción post-sesión</span>
                  </li>
                </ul>

                <p className="text-3xl font-bold text-[#7F77DD]">
                  Desde $150 USD por sesión
                </p>
              </div>

              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity font-semibold"
              >
                Agendar sesión discovery
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative rounded-2xl h-96 bg-gradient-to-br from-[#7F77DD] to-[#D4537E] p-12 flex items-center justify-center shadow-2xl">
              <TrendingUp className="text-white opacity-20" size={200} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fractional CIO/CDO */}
      <section className="py-24 bg-gradient-to-b from-white to-[#EEEDFE]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative rounded-2xl h-96 bg-gradient-to-br from-[#D4537E] to-[#7F77DD] p-12 flex items-center justify-center shadow-2xl lg:order-1">
              <Users className="text-white opacity-20" size={200} />
            </div>

            <div className="lg:order-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4537E] to-[#7F77DD] flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-[#26215C] mb-4">
                Fractional CIO/CDO
              </h2>
              <p className="text-lg text-[#26215C]/80 mb-6 leading-relaxed">
                Liderazgo ejecutivo de tecnología y datos para empresas que necesitan dirección estratégica sin el compromiso de un C-level full-time. Ideal para empresas en crecimiento o en transformación digital.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                <p className="text-sm font-semibold text-[#26215C]/60 mb-3">Incluye</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#D4537E] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#26215C]/80">Diagnóstico inicial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#D4537E] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#26215C]/80">Roadmap tecnológico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#D4537E] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#26215C]/80">Reuniones de dirección</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#D4537E] flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#26215C]/80">Mentoría al equipo</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4537E] to-[#7F77DD] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity font-semibold"
              >
                Conversemos sobre tu empresa
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educación */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7F77DD] to-[#26215C] flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-[#26215C] mb-4">
                Educación
              </h2>
              <p className="text-lg text-[#26215C]/70 max-w-2xl mx-auto">
                Programas educativos diseñados para equipos y organizaciones que quieren desarrollar capacidades analíticas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#EEEDFE]/50 rounded-2xl p-6"
              >
                <BookOpen className="text-[#7F77DD] mb-4" size={32} />
                <h3 className="text-xl font-bold text-[#26215C] mb-3">
                  Cursos OnDemand
                </h3>
                <p className="text-[#26215C]/70">
                  Análisis de datos para la toma de decisiones
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#EEEDFE]/50 rounded-2xl p-6"
              >
                <Users2 className="text-[#7F77DD] mb-4" size={32} />
                <h3 className="text-xl font-bold text-[#26215C] mb-3">
                  Workshops Presenciales
                </h3>
                <p className="text-[#26215C]/70">
                  Venta Consultiva TI, Negociación Tech
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#EEEDFE]/50 rounded-2xl p-6"
              >
                <Presentation className="text-[#7F77DD] mb-4" size={32} />
                <h3 className="text-xl font-bold text-[#26215C] mb-3">
                  Charlas
                </h3>
                <p className="text-[#26215C]/70">
                  Empresariales, Académicas, Clusters
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#EEEDFE]/50 rounded-2xl p-6"
              >
                <Target className="text-[#7F77DD] mb-4" size={32} />
                <h3 className="text-xl font-bold text-[#26215C] mb-3">
                  Recursos Digitales
                </h3>
                <p className="text-[#26215C]/70">
                  Plantillas de monetización de datos, KPIs por área
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7F77DD] to-[#26215C] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold"
              >
                Ver catálogo completo
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
