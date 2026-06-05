import { motion } from "motion/react";
import { Check, ArrowRight, Search, TrendingUp, Wrench, GraduationCap, FileText, ChevronRight, Sparkles, Clock3, Layers } from "lucide-react";
import { Link } from "react-router";

export function Servicios() {
  const diagnosticoFases = [
    {
      num: "01",
      titulo: "Descubriendo",
      desc: "Entrevistas con líderes clave",
      hoy: "La información está dispersa y no hay claridad sobre qué decisiones se toman, con qué información y en quién confía cada área.",
      logro: "Entendemos cómo se toman las decisiones críticas, qué información usan y dónde existen desconfianza o vacíos.",
      resultado: "Visión real desde quienes deciden.",
    },
    {
      num: "02",
      titulo: "Detectando Riesgos",
      desc: "Identificación de decisiones críticas",
      hoy: "Hay decisiones de alto impacto que no tienen trazabilidad clara ni información confiable que las sustente.",
      logro: "Detectamos las decisiones críticas, los riesgos actuales y los cuellos de botella que están generando pérdidas o retrasos.",
      resultado: "Riesgos y fricciones visibles y priorizados.",
    },
    {
      num: "03",
      titulo: "Ordenando la Información",
      desc: "Mapeo de información y sistemas",
      hoy: "Los datos están en diferentes sistemas, con duplicidades, nomenclaturas distintas y procesos paralelos.",
      logro: "Mapa claro de fuentes, flujos, duplicidades y brechas de calidad que afectan la confiabilidad del negocio.",
      resultado: "Información organizada y brechas claras.",
    },
    {
      num: "04",
      titulo: "Activando Prioridades",
      desc: "Construcción del plan inicial",
      hoy: "Existen oportunidades de mejora, pero no hay consenso sobre qué atacar primero ni cómo generar impacto rápido.",
      logro: "Priorizamos qué vale la pena resolver primero, definimos quick wins, responsables y un roadmap inicial a 90 días.",
      resultado: "Plan de acción claro para generar impacto.",
    },
  ];

  const diagnosticoEntregables = [
    { titulo: "Mapa de decisiones críticas", desc: "Qué decisiones se toman hoy, quién las toma y con qué información." },
    { titulo: "Mapas de fuentes y flujos de información", desc: "Dónde están los datos y dónde existen duplicidades o procesos paralelos." },
    { titulo: "Identificación de brechas prioritarias", desc: "Problemas visibles de: calidad, acceso, análisis, trazabilidad." },
    { titulo: "Priorización de iniciativas", desc: "Qué vale la pena resolver primero según impacto y esfuerzo." },
    { titulo: "Hoja de ruta inicial de trabajo", desc: "Primeras iniciativas sugeridas a 90 días." },
    { titulo: "Dashboard ejecutivo resumen", desc: "Vista consolidada de hallazgos y prioridades." },
  ];

  const timeline = [
    { fase: "KickOff + Entrevistas", semana: "Semana 1" },
    { fase: "Mapeo de Decisiones", semana: "Semana 2 - 3" },
    { fase: "Hallazgos y Priorización", semana: "Semana 4" },
    { fase: "Dashboard + Cierre", semana: "Semana 5" },
  ];

  const idealPara = [
    "Founders",
    "Gerentes",
    "Líderes comerciales",
    "Operaciones",
    "Startups",
    "Empresas con BI sin claridad",
  ];

  const claroAntes = [
    "Formulario breve con contexto del problema",
    "Archivos opcionales: dashboards, screenshots, reportes",
  ];

  const claroDurante = [
    "Análisis en vivo con preguntas estratégicas",
    "Identificación de fugas e inconsistencias",
    "Hipótesis y priorización de variables",
    "Mapa de decisiones clave",
  ];

  const claroDespues = [
    "Resumen ejecutivo con hallazgos",
    "Próximos pasos concretos",
    "Quick wins accionables",
  ];

  const claroMethod = [
    { letter: "C", name: "Contexto", desc: "Qué está pasando realmente." },
    { letter: "L", name: "Lectura", desc: "Qué dicen los datos vs. qué cree el negocio." },
    { letter: "A", name: "Anomalías", desc: "Fugas, inconsistencias, fricciones, sesgos." },
    { letter: "R", name: "Riesgo y retorno", desc: "Qué decisión tiene más impacto." },
    { letter: "O", name: "Output accionable", desc: "Qué hacer primero." },
  ];

  const coachingNiveles = [
    {
      num: "01",
      nombre: "Claridad",
      desc: "1 sesión puntual",
      detalle: "El punto de entrada ideal. Una sesión de 60–90 min para ganar claridad sobre el problema.",
      tag: "Entry",
      icon: Sparkles,
    },
    {
      num: "02",
      nombre: "Acompañamiento",
      desc: "2–4 sesiones al mes",
      detalle: "Para líderes que necesitan un aliado estratégico que los acompañe en decisiones recurrentes.",
      tag: "Growth",
      icon: Clock3,
    },
    {
      num: "03",
      nombre: "Advisor Estratégico",
      desc: "Acceso directo + revisiones + soporte async",
      detalle: "Presencia continua: revisiones, slack/WhatsApp, alertas proactivas y co-pilotaje de decisiones.",
      tag: "Premium",
      icon: Layers,
    },
  ];

  const atelierEntregables = [
    "Tableros de control para decisiones",
    "Manuales de marca analítica para la organización",
    "Automatización de reportes",
    "Agentes de IA para tareas internas",
  ];

  const atelierModelos = [
    { nombre: "Por proyecto", desc: "Alcance cerrado y entregables definidos." },
    { nombre: "Llave en mano", desc: "Solución completa lista para operar." },
    { nombre: "Bolsa de horas", desc: "Flexibilidad para necesidades puntuales." },
  ];

  const academyEntregables = [
    "Material de estudio (Método Harvard)",
    "Casos prácticos reales",
    "Plantillas listas para usar",
    "Ebook exclusivo",
  ];

  const academyFormatos = [
    { titulo: "On Demand", desc: "Cursos grabados que tu equipo toma a su ritmo, cuando los necesita." },
    { titulo: "Presencial / En vivo", desc: "Sesiones en vivo, presenciales o virtuales, con acompañamiento directo." },
    { titulo: "Workshops", desc: "Talleres intensivos y prácticos para resolver un reto concreto del equipo." },
    { titulo: "A la medida", desc: "Programas construidos según los retos, los datos y los objetivos de tu organización." },
  ];

  const academyCursos = [
    {
      titulo: "El arte de preguntar",
      para: "Formular la pregunta de negocio correcta y responderla con la métrica que mueve la decisión.",
      temas: [
        "Técnicas y metodologías para hacer preguntas de negocio",
        "De la pregunta a la métrica que la responde",
        "Tipos de decisiones y sesgos al leer los datos",
        "Caso Netflix: del costo por hora vista a producir contenido propio",
      ],
    },
    {
      titulo: "Fundamentos de Inteligencia de Negocios (BI)",
      para: "Para líderes y equipos que quieren decidir mejor con datos, sin dominar lo técnico.",
      temas: [
        "Data Literacy y el arte de hacer preguntas de negocio",
        "Storytelling y visualización para decisiones",
        "Diseño de dashboards que sí se usan",
        "ETL, transformación y modelamiento de datos",
        "Ejercicio práctico en Power BI",
      ],
    },
    {
      titulo: "Monetización de Datos",
      para: "Convierte la información de tu organización en valor financiero medible.",
      temas: [
        "Marco I-W-S: mejorar, empaquetar y vender (MIT CISR)",
        "Indicadores para medir el ROI de los datos",
        "Casos reales: BBVA, Walmart, P&G, E100",
        "Data Product Canvas para diseñar productos de datos",
      ],
    },
    {
      titulo: "Power BI en la práctica",
      para: "Construye reportes y tableros accionables en Power BI, paso a paso.",
      temas: [
        "Modelado de datos y relaciones",
        "Visualizaciones efectivas",
        "Buenas prácticas de diseño de tableros",
        "De los datos a la decisión",
      ],
    },
  ];

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
            <h1 className="text-5xl lg:text-6xl font-bold text-[#26215C] mb-6">Servicios</h1>
            <p className="text-xl text-[#26215C]/70">
              Cuatro formas de traducir información en decisiones que se ven en tu estado de resultados.
            </p>
          </motion.div>

          {/* Cards resumen */}
          <div className="grid md:grid-cols-4 gap-4 mt-16">
            {[
              { num: "01", label: "Diagnóstico", icon: Search, anchor: "diagnostico" },
              { num: "02", label: "Coaching Analítico", icon: TrendingUp, anchor: "coaching" },
              { num: "03", label: "Atelier", icon: Wrench, anchor: "atelier" },
              { num: "04", label: "Academy", icon: GraduationCap, anchor: "academy" },
            ].map((s, i) => (
              <motion.a
                key={s.num}
                href={`#${s.anchor}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.anchor)?.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="block cursor-pointer bg-white rounded-2xl p-6 shadow-md border border-[#7F77DD]/10 text-center hover:shadow-xl hover:border-[#7F77DD]/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center mx-auto mb-3">
                  <s.icon className="text-white" size={22} />
                </div>
                <p className="text-xs font-bold text-[#D4537E] mb-1">{s.num}</p>
                <p className="font-bold text-[#26215C] text-sm">{s.label}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 DIAGNÓSTICO ── */}
      <section id="diagnostico" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-[#D4537E] uppercase tracking-widest">01</span>
              <div className="h-px flex-1 bg-[#7F77DD]/20" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#26215C] mb-4">
              Diagnóstico de Información<br />y Decisiones Críticas
            </h2>
            <p className="text-lg text-[#26215C]/70 max-w-2xl mb-16">
              Un proceso de 5 semanas para entender dónde está la información, cómo se toman las decisiones y qué hay que resolver primero.
            </p>

            {/* Fases */}
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {diagnosticoFases.map((f, i) => (
                <motion.div
                  key={f.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#EEEDFE]/40 rounded-2xl p-6 border border-[#7F77DD]/15"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center text-white font-bold text-sm mb-4">
                    {f.num}
                  </div>
                  <h3 className="font-bold text-[#26215C] text-lg mb-1">{f.titulo}</h3>
                  <p className="text-[#7F77DD] text-sm font-medium mb-4">{f.desc}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-bold text-[#D4537E] uppercase mb-1">Hoy</p>
                      <p className="text-xs text-[#26215C]/70 leading-relaxed">{f.hoy}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#7F77DD] uppercase mb-1">Con el diagnóstico</p>
                      <p className="text-xs text-[#26215C]/70 leading-relaxed">{f.logro}</p>
                    </div>
                    <p className="text-xs font-bold text-[#26215C] pt-2 border-t border-[#7F77DD]/15">{f.resultado}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Entregables + Timeline */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#26215C] mb-6">¿Qué recibes al cierre?</h3>
                <div className="space-y-4">
                  {diagnosticoEntregables.map((e, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#7F77DD] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-white" size={14} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#26215C] text-sm">{e.titulo}</p>
                        <p className="text-[#26215C]/60 text-xs mt-0.5">{e.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#26215C] mb-6">¿Cómo trabajaremos?</h3>
                <div className="bg-[#EEEDFE]/30 rounded-2xl p-6 border border-[#7F77DD]/15">
                  <div className="space-y-3 mb-6">
                    {timeline.map((t, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-32 flex-shrink-0">
                          <span className="text-xs font-bold text-[#7F77DD]">{t.semana}</span>
                        </div>
                        <div className="flex-1 bg-white rounded-full h-8 flex items-center px-4 shadow-sm border border-[#7F77DD]/10">
                          <span className="text-xs font-medium text-[#26215C]">{t.fase}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#D4537E]/20">
                    <p className="text-xs font-bold text-[#D4537E] mb-2">Si están de acuerdo en avanzar:</p>
                    <div className="flex gap-4 flex-wrap">
                      {["Se formaliza el alcance", "Se agenda kickoff", "Inicia proceso de entrevistas"].map((paso, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#7F77DD]">Paso {i + 1}</span>
                          <span className="text-xs text-[#26215C]/70">{paso}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold shadow-lg"
              >
                Solicitar diagnóstico
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 02 COACHING ANALÍTICO ── */}
      <section id="coaching" className="py-24 bg-gradient-to-b from-[#EEEDFE]/30 to-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-[#D4537E] uppercase tracking-widest">02</span>
              <div className="h-px flex-1 bg-[#7F77DD]/20" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#26215C] mb-4">Coaching Analítico</h2>
            <p className="text-lg text-[#26215C]/70 max-w-2xl mb-16">
              Acompañamiento estratégico para convertir información compleja en decisiones claras, rápidas y con impacto medible en tu P&L.
            </p>

            {/* ── Sesión de Claridad ── */}
            <div className="bg-white rounded-3xl border border-[#7F77DD]/15 shadow-lg overflow-hidden mb-16">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#26215C] to-[#7F77DD] px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[#D4537E] font-bold text-xs uppercase tracking-widest mb-1">Producto de entrada</p>
                  <h3 className="text-2xl font-bold text-white">Sesión de Claridad Analítica</h3>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 self-start sm:self-auto">
                  <FileText className="text-white/70" size={16} />
                  <span className="text-white font-semibold text-sm whitespace-nowrap">60 – 90 min</span>
                </div>
              </div>

              <div className="p-8 grid lg:grid-cols-3 gap-8">
                {/* Ideal para */}
                <div>
                  <p className="text-xs font-bold text-[#D4537E] uppercase tracking-widest mb-4">Ideal para</p>
                  <div className="flex flex-wrap gap-2">
                    {idealPara.map((item, i) => (
                      <span key={i} className="bg-[#EEEDFE] text-[#7F77DD] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Qué incluye: Antes / Durante / Después */}
                <div className="lg:col-span-2">
                  <p className="text-xs font-bold text-[#D4537E] uppercase tracking-widest mb-4">Qué incluye</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-[#EEEDFE]/40 rounded-2xl p-4 border border-[#7F77DD]/10">
                      <p className="text-xs font-bold text-[#7F77DD] uppercase mb-3">Antes</p>
                      <ul className="space-y-2">
                        {claroAntes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#26215C]/70 leading-relaxed">
                            <ChevronRight className="text-[#7F77DD] flex-shrink-0 mt-0.5" size={12} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#7F77DD]/5 rounded-2xl p-4 border border-[#7F77DD]/15">
                      <p className="text-xs font-bold text-[#7F77DD] uppercase mb-3">Durante</p>
                      <ul className="space-y-2">
                        {claroDurante.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#26215C]/70 leading-relaxed">
                            <ChevronRight className="text-[#7F77DD] flex-shrink-0 mt-0.5" size={12} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#D4537E]/5 rounded-2xl p-4 border border-[#D4537E]/15">
                      <p className="text-xs font-bold text-[#D4537E] uppercase mb-3">Después</p>
                      <ul className="space-y-2">
                        {claroDespues.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#26215C]/70 leading-relaxed">
                            <ChevronRight className="text-[#D4537E] flex-shrink-0 mt-0.5" size={12} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* El verdadero valor */}
              <div className="mx-8 mb-8 bg-[#26215C] rounded-2xl p-6">
                <p className="text-[#D4537E] text-xs font-bold uppercase tracking-widest mb-3">El verdadero valor no es la reunión</p>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {["Cómo pienso", "Cómo hago las preguntas", "Cómo conecto variables", "Cómo aterrizo complejidad"].map((v, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7F77DD]" />
                      <span className="text-white/80 text-sm">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-xs mt-3">Esto convierte una videollamada en un producto intelectual.</p>
              </div>
            </div>

            {/* ── Método C.L.A.R.O. ── */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block bg-[#EEEDFE] text-[#7F77DD] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-3">Framework propio</span>
                <h3 className="text-3xl font-bold text-[#26215C]">Método C.L.A.R.O.</h3>
                <p className="text-[#26215C]/60 mt-2 text-sm max-w-md mx-auto">Cada sesión sigue este proceso para llevar complejidad a decisiones concretas.</p>
              </div>

              <div className="grid sm:grid-cols-5 gap-3">
                {claroMethod.map((m, i) => (
                  <motion.div
                    key={m.letter}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative bg-white rounded-2xl p-5 border border-[#7F77DD]/10 shadow-sm text-center group hover:border-[#7F77DD]/40 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center mx-auto mb-3 text-white font-black text-xl">
                      {m.letter}
                    </div>
                    <p className="font-bold text-[#26215C] text-sm mb-1">{m.name}</p>
                    <p className="text-[#26215C]/55 text-xs leading-relaxed">{m.desc}</p>
                    {i < 4 && (
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="text-[#7F77DD]/40" size={16} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Niveles del servicio ── */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#26215C] mb-8">Niveles del servicio</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {coachingNiveles.map((n, i) => (
                  <motion.div
                    key={n.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`rounded-2xl p-6 border flex flex-col gap-4 ${i === 2 ? "bg-gradient-to-br from-[#26215C] to-[#7F77DD] border-transparent text-white" : "bg-white border-[#7F77DD]/10 shadow-md"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 2 ? "bg-white/15" : "bg-gradient-to-br from-[#7F77DD] to-[#D4537E]"}`}>
                        <n.icon className={i === 2 ? "text-white" : "text-white"} size={20} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${i === 2 ? "bg-white/15 text-white" : "bg-[#EEEDFE] text-[#7F77DD]"}`}>
                        {n.tag}
                      </span>
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${i === 2 ? "text-white/50" : "text-[#D4537E]"}`}>Nivel {n.num}</p>
                      <h4 className={`text-xl font-bold mb-1 ${i === 2 ? "text-white" : "text-[#26215C]"}`}>{n.nombre}</h4>
                      <p className={`text-sm font-semibold mb-3 ${i === 2 ? "text-white/70" : "text-[#7F77DD]"}`}>{n.desc}</p>
                      <p className={`text-sm leading-relaxed ${i === 2 ? "text-white/70" : "text-[#26215C]/60"}`}>{n.detalle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Precio + CTA */}
            <div className="bg-[#26215C] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-1">Sesión de Claridad Analítica</p>
                <p className="text-5xl font-bold text-white">$65 USD</p>
                <p className="text-white/60 mt-1 text-sm">por sesión · Niveles 2 y 3 a cotización</p>
              </div>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold whitespace-nowrap"
              >
                Agendar sesión
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 03 ATELIER ── */}
      <section id="atelier" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-[#D4537E] uppercase tracking-widest">03</span>
              <div className="h-px flex-1 bg-[#7F77DD]/20" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#26215C] mb-4">Atelier</h2>
            <p className="text-lg text-[#26215C]/70 max-w-2xl mb-16">
              Construcción a medida de las piezas que tus decisiones necesitan para ser efectivas.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-[#26215C] mb-6">Entregables</h3>
                <div className="bg-[#EEEDFE]/30 rounded-2xl p-6 border border-[#7F77DD]/15 space-y-3">
                  {atelierEntregables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#7F77DD] flex-shrink-0" />
                      <p className="text-[#26215C]/80 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#26215C]/50 mt-4 leading-relaxed">
                  * Este servicio no incluye la adquisición de software, aplicaciones o servicios adicionales. En caso de requerirse, el cliente proveerá los accesos y licencias necesarias.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#26215C] mb-6">Modelos de Contratación</h3>
                <div className="space-y-4">
                  {atelierModelos.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-white rounded-xl p-5 shadow-sm border border-[#7F77DD]/10 flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center flex-shrink-0">
                        <Wrench className="text-white" size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-[#26215C] text-sm">{m.nombre}</p>
                        <p className="text-[#26215C]/60 text-xs mt-0.5">{m.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold"
                  >
                    Cotizar proyecto
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 04 ACADEMY ── */}
      <section id="academy" className="py-24 bg-gradient-to-b from-[#EEEDFE]/30 to-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-[#D4537E] uppercase tracking-widest">04</span>
              <div className="h-px flex-1 bg-[#7F77DD]/20" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#26215C] mb-4">Academy</h2>
            <p className="text-lg text-[#26215C]/70 max-w-3xl mb-10">
              Formación analítica para que tu equipo decida mejor y más rápido. Cursos on demand, sesiones en vivo —presenciales o virtuales—, workshops intensivos o programas construidos a la medida de tu organización.
            </p>

            {/* Formatos */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {academyFormatos.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-[#7F77DD]/10">
                  <h3 className="font-bold text-[#26215C] mb-2">{f.titulo}</h3>
                  <p className="text-sm text-[#26215C]/70 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Cursos */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#26215C] mb-6">Cursos disponibles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {academyCursos.map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-[#7F77DD]/10">
                    {(c as any).badge && (
                      <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wide text-[#D4537E] bg-[#D4537E]/10 px-3 py-1 rounded-full">
                        {(c as any).badge}
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-[#26215C] mb-1">{c.titulo}</h4>
                    <p className="text-sm text-[#7F77DD] font-semibold mb-4">{c.para}</p>
                    <ul className="space-y-2">
                      {c.temas.map((t, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#26215C]/80">
                          <Check className="text-[#7F77DD] flex-shrink-0 mt-0.5" size={16} />
                          {t}
                        </li>
                      ))}
                    </ul>
                    {(c as any).link && (
                      <Link
                        to={(c as any).link}
                        className="inline-flex items-center gap-2 mt-5 text-[#7F77DD] hover:gap-3 transition-all font-semibold text-sm"
                      >
                        Lista de espera
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Entregables */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#7F77DD]/10">
                <h3 className="font-bold text-[#26215C] mb-4">Entregables</h3>
                <ul className="space-y-3">
                  {academyEntregables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#26215C]/80">
                      <Check className="text-[#7F77DD] flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metodología */}
              <div className="bg-[#EEEDFE]/40 rounded-2xl p-6 border border-[#7F77DD]/15">
                <h3 className="font-bold text-[#26215C] mb-4">Metodología</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-[#D4537E] uppercase mb-1">Dinámica</p>
                    <ul className="space-y-1 text-sm text-[#26215C]/80">
                      <li>• Grupos de 5 a 10 participantes (in-company).</li>
                      <li>• On demand: a tu propio ritmo, sin límite de cupo.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Beneficios */}
              <div className="bg-[#26215C] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Beneficios</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Empoderamos a los equipos para elevar el nivel de la organización y cumplir objetivos estratégicos con integridad y precisión técnica.
                </p>
                <div className="mt-6">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 bg-white text-[#26215C] px-5 py-3 rounded-xl hover:bg-white/90 transition-colors font-semibold text-sm"
                  >
                    Conocer más
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gradient-to-br from-[#26215C] to-[#7F77DD]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿No sabes por cuál empezar?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Agenda una sesión discovery gratuita de 20 minutos y te ayudo a identificar qué necesita tu organización.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-white text-[#7F77DD] px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-xl font-semibold"
          >
            Agendar sesión discovery
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
