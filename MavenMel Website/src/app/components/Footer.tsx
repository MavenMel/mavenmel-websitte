import { Link } from "react-router";
import { Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/servicios", label: "Servicios" },
    { path: "/sobre-mi", label: "Sobre mí" },
    { path: "/diagnostico", label: "Diagnóstico" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-[#26215C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
  <div className="flex items-center gap-2">
    {/* El cuadrito de color */}
    <div className="w-10 h-10 w-10 h-10 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#D4537E] flex items-center justify-center text-white font-bold text-sm">MW</div>
    <div className="flex flex-col">
      <span className="font-bold text-xl text-white leading-tight tracking-wide">
        MAVEN MEL
      </span>
      <span className="text-[10px] text-[#7F77DD] leading-tight">
        Strategy & Data
      </span>
    </div>
  </div>
</Link>
        </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/573004824207"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/melisa-tesillo-diaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; 2025 MavenMel. Strategy & Data.</p>
        </div>
      </div>
    </footer>
  );
}
