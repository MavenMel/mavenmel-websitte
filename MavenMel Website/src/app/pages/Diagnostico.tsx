import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, Circle, ArrowRight, Clock, FileText, Award, MessageSquare, Loader2 } from "lucide-react";
import { Link } from "react-router";

export function Diagnostico() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [leadForm, setLeadForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
  });

  const questions = [
    {
      id: 1,
      question: "¿Tu equipo usa regularmente datos para tomar decisiones?",
      options: [
        "Raramente, dependemos de intuición",
        "A veces, en decisiones grandes",
        "Frecuentemente, es parte de nuestra cultura",
      ],
    },
    {
      id: 2,
      question: "¿Qué tan confiables son tus reportes y dashboards?",
      options: [
        "Tenemos dudas sobre la calidad de los datos",
        "Son confiables pero difíciles de mantener",
        "Alta confianza, procesos robustos",
      ],
    },
    {
      id: 3,
      question: "¿Tu equipo aprovecha las herramientas de analítica que tienen?",
      options: [
        "Tenemos herramientas pero nadie las usa",
        "Las usamos pero no a todo su potencial",
        "Las dominamos y sacamos valor real",
      ],
    },
    {
      id: 4,
      question: "¿Cómo es la colaboración entre áreas técnicas y de negocio?",
      options: [
        "Poco fluida, hay silos claros",
        "Funcional pero mejorable",
        "Excelente, trabajamos integrados",
      ],
    },
    {
      id: 5,
      question: "¿Tienes una estrategia clara de datos?",
      options: [
        "No, vamos resolviendo sobre la marcha",
        "Tenemos ideas pero no está documentado",
        "Sí, con roadmap y prioridades claras",
      ],
    },
    {
      id: 6,
      question: "¿Con qué frecuencia actualizan y revisan sus métricas clave?",
      options: [
        "Raramente o nunca",
        "Mensualmente o cuando hay problemas",
        "Semanalmente o en tiempo real",
      ],
    },
    {
      id: 7,
      question: "¿Qué tan bien entienden los líderes los datos de su área?",
      options: [
        "Dependen del equipo técnico para interpretarlos",
        "Entienden lo básico pero necesitan apoyo",
        "Son autónomos y toman decisiones con confianza",
      ],
    },
    {
      id: 8,
      question: "¿Tienen procesos documentados para la gestión de datos?",
      options: [
        "No, todo es ad-hoc",
        "Algunos procesos informales",
        "Sí, documentados y seguidos consistentemente",
      ],
    },
    {
      id: 9,
      question: "¿Cómo manejan la calidad de los datos?",
      options: [
        "No tenemos procesos formales",
        "Revisamos cuando encontramos problemas",
        "Tenemos controles preventivos y monitoreo continuo",
      ],
    },
    {
      id: 10,
      question: "¿Los datos están integrados entre diferentes sistemas?",
      options: [
        "No, trabajamos con silos de información",
        "Parcialmente integrados",
        "Totalmente integrados con una única fuente de verdad",
      ],
    },
    {
      id: 11,
      question: "¿Qué tan accesibles son los datos para quienes los necesitan?",
      options: [
        "Difíciles de acceder, requieren solicitudes",
        "Accesibles pero requiere conocimiento técnico",
        "Self-service, cualquiera puede acceder fácilmente",
      ],
    },
    {
      id: 12,
      question: "¿Tienen capacidad de análisis predictivo o solo descriptivo?",
      options: [
        "Solo miramos lo que pasó",
        "Hacemos algunos análisis de tendencias",
        "Usamos modelos predictivos regularmente",
      ],
    },
    {
      id: 13,
      question: "¿Cómo es la cultura de experimentación basada en datos?",
      options: [
        "No experimentamos, seguimos lo que funciona",
        "Experimentamos ocasionalmente",
        "Cultura fuerte de A/B testing y experimentación",
      ],
    },
    {
      id: 14,
      question: "¿Tienen roles dedicados a analítica y datos?",
      options: [
        "No, es responsabilidad compartida sin dueño claro",
        "Hay algunas personas dedicadas parcialmente",
        "Equipo dedicado con roles claros",
      ],
    },
    {
      id: 15,
      question: "¿Qué tan rápido pueden responder preguntas de negocio con datos?",
      options: [
        "Días o semanas",
        "Horas o un día",
        "Minutos o en tiempo real",
      ],
    },
  ];

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    const total = Object.values(selectedAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = questions.length * 2;
    return (total / maxScore) * 100;
  };

  const getResult = () => {
    const score = calculateScore();
    if (score < 35) {
      return {
        level: "Inicial",
        title: "Oportunidad de transformación",
        description:
          "Tu organización está en las etapas iniciales de madurez analítica. Hay mucho potencial para desarrollar capacidades y cultura de datos.",
        recommendation: "Coach Analítica + Educación",
        recommendations: [
          "Establece métricas clave y KPIs básicos",
          "Capacita a líderes en fundamentos de datos",
          "Implementa procesos básicos de calidad de datos",
          "Define una estrategia inicial de datos",
        ],
        color: "from-[#D4537E] to-[#7F77DD]",
      };
    } else if (score < 70) {
      return {
        level: "En desarrollo",
        title: "En crecimiento",
        description:
          "Tienen bases sólidas pero hay áreas clave por mejorar. Con la guía correcta, pueden alcanzar un nivel avanzado de madurez analítica.",
        recommendation: "Coach Analítica + Fractional CIO/CDO",
        recommendations: [
          "Integra sistemas y elimina silos de datos",
          "Desarrolla capacidades de análisis avanzado",
          "Implementa gobernanza de datos formal",
          "Fomenta una cultura de decisiones basadas en evidencia",
        ],
        color: "from-[#7F77DD] to-[#D4537E]",
      };
    } else {
      return {
        level: "Avanzado",
        title: "Madurez analítica",
        description:
          "Tu organización está en un nivel avanzado de madurez analítica. El enfoque debe estar en mantener el momentum, innovar y escalar las capacidades existentes.",
        recommendation: "Fractional CIO/CDO",
        recommendations: [
          "Implementa analítica predictiva y prescriptiva",
          "Escala las mejores prácticas a toda la organización",
          "Monetiza tus capacidades de datos",
          "Innova con nuevas tecnologías y enfoques",
        ],
        color: "from-[#7F77DD] to-[#26215C]",
      };
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadForm),
      });

      if (res.ok) {
        setLeadSubmitted(true);
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      } else {
        const data = await res.json();
        setSubmitError(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setSubmitError("No se pudo conectar. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Clock, text: "100% gratuito" },
    { icon: FileText, text: "Resultados inmediatos" },
    { icon: Award, text: "Recomendaciones personalizadas" },
    { icon: MessageSquare, text: "Sin compromiso" },
  ];

  const allAnswered = Object.keys(selectedAnswers).length === questions.length;
  const result = leadSubmitted ? getResult() : null;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#EEEDFE] to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#26215C] mb-6">
              Diagnóstico de Madurez Analítica
            </h1>
            <p className="text-xl text-[#26215C]/70 mb-8">
              Descubre en 5 minutos qué tan bien está aprovechando tu organización sus datos
            </p>
            <p className="text-lg text-[#26215C]/60">
              Responde 15 preguntas y recibe un reporte personalizado con tu nivel actual y recomendaciones de mejora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-y border-[#7F77DD]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-white" size={20} />
                </div>
                <span className="font-semibold text-[#26215C]">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-24 bg-gradient-to-b from-white to-[#EEEDFE]/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {questions.map((q, qIndex) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: qIndex * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-md"
              >
                <h3 className="text-xl font-bold text-[#26215C] mb-6">
                  {qIndex + 1}. {q.question}
                </h3>
                <div className="space-y-3">
                  {q.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(q.id, optionIndex)}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                        selectedAnswers[q.id] === optionIndex
                          ? "border-[#7F77DD] bg-[#EEEDFE]/50 shadow-sm"
                          : "border-transparent bg-[#EEEDFE]/20 hover:bg-[#EEEDFE]/40"
                      }`}
                    >
                      {selectedAnswers[q.id] === optionIndex ? (
                        <CheckCircle2 className="text-[#7F77DD] flex-shrink-0 mt-0.5" size={24} />
                      ) : (
                        <Circle className="text-[#26215C]/30 flex-shrink-0 mt-0.5" size={24} />
                      )}
                      <span className="text-[#26215C]">{option}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {!allAnswered && (
            <div className="mt-12 text-center">
              <p className="text-lg text-[#26215C]/70">
                {Object.keys(selectedAnswers).length} de {questions.length} preguntas respondidas
              </p>
              <div className="mt-4 h-2 bg-[#EEEDFE] rounded-full overflow-hidden max-w-md mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-[#7F77DD] to-[#D4537E] transition-all duration-500"
                  style={{
                    width: `${(Object.keys(selectedAnswers).length / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lead Capture — aparece cuando todas las preguntas están respondidas y aún no se registró */}
      {allAnswered && !leadSubmitted && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-gradient-to-br from-[#EEEDFE] to-white"
        >
          <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#7F77DD] to-[#D4537E] mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#26215C] mb-3">
                ¡Tu diagnóstico está listo!
              </h2>
              <p className="text-lg text-[#26215C]/70">
                Ingresa tus datos para ver tu nivel de madurez analítica y recomendaciones personalizadas.
              </p>
            </div>

            <form
              onSubmit={handleLeadSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg text-left space-y-5"
            >
              <div>
                <label className="block text-sm font-semibold text-[#26215C] mb-1">
                  Nombre completo <span className="text-[#D4537E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. María González"
                  value={leadForm.nombre}
                  onChange={(e) => setLeadForm({ ...leadForm, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/30 focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/50 text-[#26215C] placeholder:text-[#26215C]/40"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#26215C] mb-1">
                  Correo electrónico <span className="text-[#D4537E]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ej. maria@empresa.com"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/30 focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/50 text-[#26215C] placeholder:text-[#26215C]/40"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#26215C] mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="Ej. +57 310 000 0000"
                  value={leadForm.telefono}
                  onChange={(e) => setLeadForm({ ...leadForm, telefono: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/30 focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/50 text-[#26215C] placeholder:text-[#26215C]/40"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#26215C] mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ej. Acme Corp"
                  value={leadForm.empresa}
                  onChange={(e) => setLeadForm({ ...leadForm, empresa: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/30 focus:outline-none focus:ring-2 focus:ring-[#7F77DD]/50 text-[#26215C] placeholder:text-[#26215C]/40"
                />
              </div>

              {submitError && (
                <p className="text-sm text-[#D4537E] text-center">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Procesando...
                  </>
                ) : (
                  <>
                    Ver mis resultados
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-[#26215C]/40">
                Tu información es confidencial. No compartimos tus datos con terceros.
              </p>
            </form>
          </div>
        </motion.section>
      )}

      {/* Results — aparece solo después de registrar los datos */}
      {leadSubmitted && result && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-24 bg-white"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className={`bg-gradient-to-br ${result.color} rounded-2xl p-12 text-white shadow-2xl`}>
              <div className="text-center mb-8">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
                  <p className="text-sm font-semibold">Nivel de madurez</p>
                </div>
                <h2 className="text-5xl font-bold mb-2">{result.level}</h2>
                <div className="text-4xl font-bold mb-6">{Math.round(calculateScore())}%</div>
              </div>

              <h3 className="text-3xl font-bold mb-4">{result.title}</h3>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                {result.description}
              </p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="text-sm font-semibold mb-4 text-white/80">
                  Recomendaciones clave:
                </p>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="flex-shrink-0 mt-1" size={20} />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="text-sm font-semibold mb-2 text-white/80">
                  Servicios recomendados:
                </p>
                <p className="text-2xl font-bold">{result.recommendation}</p>
              </div>

              <div className="text-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 bg-white text-[#7F77DD] px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-xl font-semibold"
                >
                  ¿Quieres profundizar en tus resultados? Agenda una sesión
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
