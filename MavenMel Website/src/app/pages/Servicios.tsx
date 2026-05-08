import { motion } from "motion/react";
import { Check, ArrowRight, Search, TrendingUp, Wrench, GraduationCap, Clock, FileText, LayoutDashboard, Zap, Users, Building2, ChevronRight } from "lucide-react";
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

  const coachingFase1 = [
    "Dashboard de madurez: datos, gobernanza, cultura, tecnología",
    "Matriz de iniciativas priorizadas (score R.I.C.E.)",
    "Plan de 12 meses: acciones, cronograma, costos",
    "Tablero de What Ifs para priorización de iniciativas",
    "Presentación ejecutiva a liderazgo (90 min)",
  ];

  const coachingFase2 = [
    "Sesiones mensuales con liderazgo: revisión y validación de datos",
    "Sesiones mensuales con equipos: entrenamiento y coaching",
    "Informes mensuales de avance: adopción y decisiones",
  ];

  const coachingBeneficios = [
    {
      grupo: "Para el Liderazgo",
      items: [
        "Recupera tiempo en reuniones y decisiones basadas en datos.",
        "Identifica y cuantifica riesgos proactivamente.",
      ],
    },
    {
      grupo: "Para los Equipos Operacionales",
      items: [
        "Claridad en la comunicación y priorización objetiva.",
        "Entrenamiento en cultura de análisis y defensa de recomendaciones.",
      ],
    },
    {
      grupo: "Para la Organización",
      items: [
        "Gobierno de datos, ROI mejorado y capacidad instalada.",
        "Infraestructura de datos escalable para el crecimiento.",
      ],
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
              { num: "01", label: "Diagnóstico", icon: Search },
              { num: "02", label: "Coaching Analítico", icon: TrendingUp },
              { num: "03", label: "Atelier", icon: Wrench },
              { num: "04", label: "Academy", icon: GraduationCap },
            ].map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#7F77DD]/10 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center mx-auto mb-3">
                  <s.icon className="text-white" size={22} />
                </div>
                <p className="text-xs font-bold text-[#D4537E] mb-1">{s.num}</p>
                <p className="font-bold text-[#26215C] text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 DIAGNÓSTICO ── */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-gradient-to-b from-[#EEEDFE]/30 to-white">
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
              Acompañamiento estratégico para validar decisiones, sostener prioridades y desarrollar capacidades analíticas en tu equipo.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Entregables */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-[#7F77DD]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#7F77DD]/10 flex items-center justify-center">
                      <FileText className="text-[#7F77DD]" size={18} />
                    </div>
                    <h3 className="font-bold text-[#26215C]">Semanas 1–3 · Diagnóstico Ejecutivo</h3>
                  </div>
                  <ul className="space-y-2">
                    {coachingFase1.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#26215C]/80">
                        <Check className="text-[#7F77DD] flex-shrink-0 mt-0.5" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border border-[#7F77DD]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#D4537E]/10 flex items-center justify-center">
                      <Users className="text-[#D4537E]" size={18} />
                    </div>
                    <h3 className="font-bold text-[#26215C]">Mes 1 en adelante · Coaching</h3>
                  </div>
                  <ul className="space-y-2">
                    {coachingFase2.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#26215C]/80">
                        <Check className="text-[#D4537E] flex-shrink-0 mt-0.5" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-4">
                {coachingBeneficios.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-[#EEEDFE]/40 rounded-2xl p-5 border border-[#7F77DD]/15"
                  >
                    <p className="font-bold text-[#26215C] mb-2 text-sm">{b.grupo}</p>
                    <ul className="space-y-1.5">
                      {b.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#26215C]/70">
                          <ChevronRight className="text-[#7F77DD] flex-shrink-0 mt-0.5" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Precio visible: solo sesión 1:1 */}
            <div className="bg-[#26215C] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-1">Sesión 1:1</p>
                <p className="text-5xl font-bold text-white">$65 USD</p>
                <p className="text-white/70 mt-1">por hora · agenda directamente</p>
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
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-gradient-to-b from-[#EEEDFE]/30 to-white">
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
            <p className="text-lg text-[#26215C]/70 max-w-3xl mb-16">
              Convertimos el análisis de datos en una herramienta humana que reduce la sobrecarga operativa, devolviendo tiempo valioso a tu equipo. Capacitamos a tu personal en herramientas analíticas y metodologías modernas, impulsando una cultura de aprendizaje continuo.
            </p>

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
                    <p className="text-xs font-bold text-[#D4537E] uppercase mb-1">Modalidades</p>
                    <p className="text-sm text-[#26215C]/80">Presencial · Virtual · On Demand</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#D4537E] uppercase mb-1">Dinámica</p>
                    <ul className="space-y-1 text-sm text-[#26215C]/80">
                      <li>• Mínimo 5, máximo 10 participantes.</li>
                      <li>• On demand: a discreción del usuario.</li>
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
