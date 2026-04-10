import { motion } from "motion/react";
import {
  Award,
  Target,
  Heart,
  ArrowRight,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router";

export function SobreMi() {
  const credentials = [
    "14+ años en consultoría de datos y tecnología",
    "Proyectos de adopción tecnológica en múltiples industrias",
    "Especialista en monetización de datos y soluciones B2B",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#EEEDFE] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://lh3.googleusercontent.com/d/1zCeAbyUtPjXecPODip5EVp48pgVyKfBE"
                  alt="Professional office environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-[#7F77DD] to-[#D4537E] rounded-2xl -z-10 blur-3xl opacity-20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-[#26215C] mb-4">
                Hola, soy Melisa Tesillo
              </h1>
              <p className="text-2xl text-[#7F77DD] font-semibold mb-6">
                Tu Coach Analítica 
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}

     {/* Timeline de Experiencia Profesional Corregido */}
<section className="py-16 bg-[#EEEDFE]/50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-[#26215C] mb-6">Mi Trayectoria</h2>
    </motion.div>

    <div className="relative">
      {/* Línea vertical central */}
      <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-[#7F77DD]/20 hidden md:block"></div>
      
      <div className="space-y-16">
        
      {/* 1. MAVEN MEL (Izquierda) */}
<div className="flex flex-col md:flex-row md:justify-start items-center relative">
  <div className="hidden md:block absolute left-1/2 -ml-[9px] top-1 w-4 h-4 bg-[#D4537E] rounded-full border-4 border-white z-10"></div>
  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="w-full md:w-[calc(50%-2rem)] md:text-right">
    <div className="bg-white p-4 rounded-2xl shadow-md border border-[#7F77DD]/10"> {/* Reduje el padding de p-6 a p-4 */}
      <span className="text-[#D4537E] font-bold text-sm">2020 - Presente</span>
      <h3 className="text-xl font-bold text-[#26215C]">MAVEN MEL</h3>
      {/* CAMBIO DE TEXTO AQUÍ ABAJO */}
      <p className="text-[#7F77DD] font-semibold text-sm mb-2">Decisiones Respaldadas por Datos</p> 
      <p className="text-xs text-[#26215C]/70">Liderando la adopción de IA aplicada y estrategias de datos para transformar decisiones de negocio.</p>
    </div>
  </motion.div>
</div>

        {/* 2. GRUPO EVO / EVOAGRO (Derecha) */}
        <div className="flex flex-col md:flex-row md:justify-end items-center relative">
          <div className="hidden md:block absolute left-1/2 -ml-[9px] top-1 w-4 h-4 bg-[#7F77DD] rounded-full border-4 border-white z-10"></div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="w-full md:w-[calc(50%-2rem)]">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#7F77DD]/10">
              <span className="text-[#7F77DD] font-bold text-sm">2025 - 2026</span>
              <h3 className="text-xl font-bold text-[#26215C]">GRUPO EVO (EVOAGRO)</h3>
              <p className="text-[#7F77DD] font-semibold text-sm mb-3">Líder Tecnologías Digitales (CDO)</p>
              <p className="text-xs text-[#26215C]/70">•Incremento del 80% en productividad comercial y automatización de 320 horas-hombre/mes.</p>
            </div>
          </motion.div>
        </div>

        {/* 3. CELES (Izquierda) */}
        <div className="flex flex-col md:flex-row md:justify-start items-center relative">
          <div className="hidden md:block absolute left-1/2 -ml-[9px] top-1 w-4 h-4 bg-[#7F77DD] rounded-full border-4 border-white z-10"></div>
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="w-full md:w-[calc(50%-2rem)] md:text-right">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#7F77DD]/10">
              <span className="text-[#7F77DD] font-bold text-sm">2024 - 2025</span>
              <h3 className="text-xl font-bold text-[#26215C]">CELES</h3>
              <p className="text-[#7F77DD] font-semibold text-sm mb-3">Enterprise Negotiator</p>
              <p className="text-xs text-[#26215C]/70">•Cerré ~$500K USD ARR gestionando ciclos de venta B2B enterprise de 6-8 meses con estrategia Go-to-Market consultiva (plataforma SaaS de supply chain).</p>
            </div>
          </motion.div>
        </div>

        {/* 4. MANAR / DATECSA (Derecha) */}
        <div className="flex flex-col md:flex-row md:justify-end items-center relative">
          <div className="hidden md:block absolute left-1/2 -ml-[9px] top-1 w-4 h-4 bg-[#7F77DD] rounded-full border-4 border-white z-10"></div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="w-full md:w-[calc(50%-2rem)]">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#7F77DD]/10">
              <span className="text-[#7F77DD] font-bold text-sm">2017 - 2024</span>
              <h3 className="text-xl font-bold text-[#26215C]">MANAR / DATECSA</h3>
              <p className="text-[#7F77DD] font-semibold text-sm mb-3">Gerente de Oficina / KAM Senior</p>
              <p className="text-xs text-[#26215C]/70">•Cerré múltiples contratos en USD liderando ventas consultivas de plataformas BI (Qlik) en retail, logística e industria, expandiendo cartera estratégica en la Costa Caribe colombiana.
•Reduje tiempos operativos logísticos un 20% desarrollando modelos analíticos de optimización de rutas para Coordinadora Mercantil y modelos de propensión para el Puerto de Barranquilla.
</p>
            </div>
          </motion.div>
        </div>

        {/* 5. SIMPLEXITY (Izquierda) */}
        <div className="flex flex-col md:flex-row md:justify-start items-center relative">
          <div className="hidden md:block absolute left-1/2 -ml-[9px] top-1 w-4 h-4 bg-[#7F77DD] rounded-full border-4 border-white z-10"></div>
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="w-full md:w-[calc(50%-2rem)] md:text-right">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#7F77DD]/10">
              <span className="text-[#7F77DD] font-bold text-sm">2012 - 2017</span>
              <h3 className="text-xl font-bold text-[#26215C]">SIMPLEXITY</h3>
              <p className="text-[#7F77DD] font-semibold text-sm mb-3">Directora de Oficina / Coordinadora de Proyectos</p>
              <p className="text-xs text-[#26215C]/70">•Logré adopción tecnológica del 92% liderando gestión del cambio organizacional con equipos cross-functional de hasta 15 personas en Grupo Argos, Hatovial y concesiones Vías 4G.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  </div>
</section> 
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-[#26215C]/80 leading-relaxed"
          >
            <p>
              Llevo más de 14 años ayudando a empresas a adoptar
              tecnología y convertir datos en decisiones. He
              trabajado en consultoría comercial, roles de
              datos, y proyectos de transformación digital en
              empresas como Simplexity, Manar/Datecsa, Celes, Evoagro.
            </p>
            <p>
              Lo que más me apasiona no es la tecnología en sí,
              sino lo que pasa cuando un líder finalmente
              entiende qué le están diciendo sus números. Ese
              momento de claridad donde todo hace clic.
            </p>
            <p>
              Creé MavenMel porque vi demasiados ejecutivos
              frustrados: tienen herramientas,
              tienen dashboards... pero siguen bajando todo a excel y tomando
              decisiones con el estómago porque nadie les enseñó
              a hacer las preguntas correctas.
            </p>
            <p>
              Mi enfoque es diferente. No te enseño a ser data
              scientist. Te enseño a ser un líder que sabe usar
              los datos que ya tiene.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-gradient-to-b from-white to-[#EEEDFE]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {credentials.map((credential, index) => (
              <motion.div
                key={credential}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white rounded-2xl p-6 shadow-md text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <p className="text-[#26215C]/80 leading-relaxed">
                  {credential}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] mb-6">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#26215C] mb-4">
              Mi filosofía
            </h2>
            <p className="text-2xl text-[#7F77DD] font-semibold italic max-w-2xl mx-auto">
              "Las preguntas correctas importan más que las
              respuestas perfectas."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gradient-to-br from-[#26215C] to-[#7F77DD]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿List@ para empezar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agenda tu sesión y descubre cómo puedo ayudarte a
            convertir tus datos en decisiones.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-[#7F77DD] px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-xl font-semibold"
          >
            Agenda tu sesión
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
