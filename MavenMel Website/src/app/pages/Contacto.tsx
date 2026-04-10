import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MessageCircle, Linkedin, Send, Calendar, MapPin } from "lucide-react";

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [autorizo, setAutorizo] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // --- LÓGICA ANTISPAM HONEPYOT ---
    const form = e.target as HTMLFormElement;
    const honeypot = form.querySelector('input[name="website"]') as HTMLInputElement;
    
    // Si el campo invisible tiene algo, es un bot. Cortamos la ejecución aquí.
    if (honeypot && honeypot.value) {
      console.log("Bot detectado");
      return; 
    }
    // --------------------------------

    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: "", email: "", empresa: "", mensaje: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Hablemos
            </h1>
            <p className="text-xl text-[#26215C]/70">
              Elige la forma que prefieras para conectar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Agenda directa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#7F77DD] to-[#D4537E] rounded-2xl p-8 text-white mb-8">
  <Calendar className="mb-4" size={40} />
  <h2 className="text-3xl font-bold mb-3">
    Agenda una llamada
  </h2>
  <p className="text-xl text-white/90 mb-6">
    Sesión discovery de 20 minutos sin costo
  </p>
  <div className="bg-white rounded-xl overflow-hidden">
    <iframe
      src="https://calendly.com/mavenmel-info/30min"
      width="100%"
      height="650"
      frameBorder="0"
      title="Agenda tu sesión"
    />
  </div>
</div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#26215C] mb-6">
                  Otras formas de contacto
                </h3>

                <a
                  href="mailto:info@mavenmel.com"
                  className="flex items-start gap-4 p-6 rounded-xl bg-[#EEEDFE]/50 hover:bg-[#EEEDFE] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#26215C] mb-1">Email</h3>
                    <p className="text-[#26215C]/70">info@mavenmel.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/573004824207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-xl bg-[#EEEDFE]/50 hover:bg-[#EEEDFE] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#26215C] mb-1">WhatsApp</h3>
                    <p className="text-[#26215C]/70">Escríbeme directamente</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/melisa-tesillo-diaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-xl bg-[#EEEDFE]/50 hover:bg-[#EEEDFE] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#26215C] mb-1">LinkedIn</h3>
                    <p className="text-[#26215C]/70">Conectemos profesionalmente</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-[#EEEDFE]/50">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#26215C] mb-1">Ubicación</h3>
                    <p className="text-[#26215C]/70">LATAM (remoto)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#26215C] mb-6">
                Envíame un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-[#26215C] mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-[#EEEDFE]/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#26215C] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-[#EEEDFE]/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-semibold text-[#26215C] mb-2"
                  >
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-[#EEEDFE]/30"
                  />
                </div>
{/* Honeypot antispam - campo invisible */}
<input
  type="text"
  name="website"
  style={{ display: "none" }}
  tabIndex={-1}
  autoComplete="off"
/>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-[#26215C] mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-[#EEEDFE]/30 resize-none"
                    placeholder="Cuéntame sobre tu desafío analítico..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 font-semibold"
                >
                  {submitted ? (
                    "¡Mensaje enviado!"
                  ) : (
                    <>
                      Enviar mensaje
                      <Send size={20} />
                    </>
                  )}
                  <div className="space-y-4 mb-8">
  {/* Texto del título en blanco para mejor contraste */}
  <h3 className="text-white text-lg font-medium text-center">Política de privacidad</h3>
  
  {/* El borde ahora es blanco/translúcido y el fondo es oscuro/translúcido para que resalte */}
  <div className="relative p-6 rounded-2xl border border-white/20 bg-black/10 flex flex-col md:flex-row items-start gap-6">
    <div className="flex-1">
      {/* Título interno en blanco */}
      <h4 className="text-white font-bold mb-2 text-sm">Aviso de tratamiento de datos personales.</h4>
      {/* Texto legal en blanco/translúcido para suavizarlo */}
      <p className="text-white/80 text-[12px] leading-relaxed text-justify">
        En cumplimiento a lo estipulado en la Ley 1581 de 2012 y demás normas y decretos que la complementan, 
        el titular de datos personales autoriza para que la información suministrada en nuestras bases de datos 
        sea utilizada exclusivamente por MAVEN MEL, para el desarrollo de diversos procedimientos relacionados 
        directamente con su objeto social.
      </p>
    </div>

    <div className="flex flex-col items-center gap-2">
      {/* El Switch ahora cambia al morado de MavenMel cuando se activa */}
      <button
        type="button"
        onClick={() => setAutorizo(!autorizo)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          autorizo ? 'bg-[#7F77DD]' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            autorizo ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      {/* Texto de "Autorizo" en blanco */}
      <span className="text-white text-[10px] font-bold">Autorizo</span>
    </div>
  </div>
</div>
                  
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gradient-to-br from-[#26215C] to-[#7F77DD]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Prefieres algo más directo?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Escríbeme por WhatsApp y conversemos sobre cómo puedo ayudarte
          </p>
          <a
            href="https://wa.me/573004824207"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#7F77DD] px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-xl font-semibold text-lg"
          >
            <MessageCircle size={24} />
            Escríbeme por WhatsApp
          </a>
        </div>
      </motion.section>
    </div>
  );
}
