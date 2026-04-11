import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MessageCircle, Linkedin, Send, Calendar, MapPin, Phone } from "lucide-react";

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "", // <--- AÑADIDO
    empresa: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // <--- PARA EL BOTÓN
  const [autorizo, setAutorizo] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!autorizo) {
      alert("Por favor, autoriza el tratamiento de datos para enviar el mensaje.");
      return;
    }

    setIsLoading(true);

    // --- LÓGICA ANTISPAM HONEPYOT ---
    const form = e.target as HTMLFormElement;
    const honeypot = form.querySelector('input[name="website"]') as HTMLInputElement;
    if (honeypot && honeypot.value) return; 

    try {
      // Reutilizamos tu infraestructura de Netlify
      // Nota: Puedes crear otra función llamada 'contact.ts' o usar la misma ajustándola
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        body: JSON.stringify({ 
          email: formData.email,
          attributes: {
            NOMBRE: formData.nombre,
            SMS: formData.telefono, // Brevo usa 'SMS' para el teléfono
            EMPRESA: formData.empresa,
            MENSAJE: formData.mensaje
          },
          listIds: [8] // <--- USA UN ID DIFERENTE (Ej: Lista de Prospectos)
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
        setAutorizo(false);
      }
    } catch (error) {
      alert("Error al enviar el mensaje.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#EEEDFE] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#26215C] mb-6">Hablemos</h1>
            <p className="text-xl text-[#26215C]/70">Elige la forma que prefieras para conectar</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Columna Izquierda: Agenda y Redes */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#7F77DD] to-[#D4537E] rounded-3xl p-8 text-white">
                <Calendar className="mb-4" size={40} />
                <h2 className="text-3xl font-bold mb-3">Agenda una llamada</h2>
                <p className="text-xl text-white/90 mb-6">Sesión discovery de 20 minutos sin costo</p>
                <div className="bg-white rounded-2xl overflow-hidden h-[500px]">
                  <iframe src="https://calendly.com/mavenmel-info/30min" width="100%" height="100%" frameBorder="0" title="Agenda" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:info@mavenmel.com" className="flex items-center gap-4 p-4 rounded-2xl bg-[#EEEDFE]/50 hover:bg-[#EEEDFE] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#7F77DD] flex items-center justify-center text-white"><Mail size={20} /></div>
                  <span className="font-medium text-[#26215C]">Email</span>
                </a>
                <a href="https://wa.me/573004824207" className="flex items-center gap-4 p-4 rounded-2xl bg-[#EEEDFE]/50 hover:bg-[#EEEDFE] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#D4537E] flex items-center justify-center text-white"><MessageCircle size={20} /></div>
                  <span className="font-medium text-[#26215C]">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Formulario */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-[#EEEDFE]/30 p-8 rounded-3xl border border-[#7F77DD]/10 shadow-xl shadow-[#7F77DD]/5">
                <h2 className="text-3xl font-bold text-[#26215C] mb-8">Envíame un mensaje</h2>
                
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><Send size={40} /></div>
                    <h3 className="text-2xl font-bold text-[#26215C] mb-2">¡Mensaje Recibido!</h3>
                    <p className="text-[#26215C]/70">Me pondré en contacto contigo muy pronto.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-8 text-[#7F77DD] font-bold">Enviar otro mensaje</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                    
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#26215C] mb-2">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#26215C] mb-2">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-white" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#26215C] mb-2">Teléfono</label>
                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required placeholder="+57..." className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#26215C] mb-2">Empresa</label>
                        <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-white" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#26215C] mb-2">Mensaje</label>
                      <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-xl border border-[#7F77DD]/20 focus:border-[#7F77DD] focus:outline-none bg-white resize-none" placeholder="¿En qué puedo ayudarte?" />
                    </div>

                    {/* POLÍTICA DE PRIVACIDAD (Fuera del botón) */}
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <button type="button" onClick={() => setAutorizo(!autorizo)} className={`mt-1 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full transition-colors ${autorizo ? 'bg-[#7F77DD]' : 'bg-gray-300'}`}>
                          <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${autorizo ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                        <p className="text-[10px] text-gray-500 leading-tight">
                          Autorizo a MAVEN MEL para el tratamiento de mis datos personales según la Ley 1581 de 2012.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || !autorizo}
                      className="w-full bg-gradient-to-r from-[#7F77DD] to-[#D4537E] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 font-bold"
                    >
                      {isLoading ? "Enviando..." : "Enviar mensaje"} <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
