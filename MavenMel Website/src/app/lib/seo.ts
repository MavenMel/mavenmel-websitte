import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE = "https://mavenmel.com";
const OG_IMAGE = `${SITE}/og-image.png`;

type Meta = { title: string; description: string };

// Título y descripción únicos por página (keywords del ICP + posicionamiento actual).
const META_BY_PATH: Record<string, Meta> = {
  "/": {
    title: "Maven Mel | De los datos a decisiones que mueven el negocio",
    description:
      "Consultoría boutique que convierte la información que tu empresa ya tiene en decisiones a tiempo. Claridad analítica para líderes que responden por resultados.",
  },
  "/servicios": {
    title: "Servicios | Diagnóstico, Atelier y acompañamiento analítico — Maven Mel",
    description:
      "Sesión de Claridad, Diagnóstico de decisiones, construcción de tableros y acompañamiento. Servicios para convertir tus datos en resultados de negocio.",
  },
  "/sobre-mi": {
    title: "Sobre Melisa Tesillo | El puente entre negocio y datos — Maven Mel",
    description:
      "14 años traduciendo entre negocio y tecnología. Conoce a Melisa Tesillo y la convicción de Maven Mel: el dato es el medio, la decisión es el producto.",
  },
  "/diagnostico": {
    title: "Diagnóstico Analítico | El mapa de tus decisiones críticas — Maven Mel",
    description:
      "Un diagnóstico que revela dónde tu empresa pierde valor por no decidir con sus datos, con una hoja de ruta priorizada por impacto. Sin tableros de relleno.",
  },
  "/contacto": {
    title: "Contacto | Hablemos de tus decisiones — Maven Mel",
    description:
      "Agenda una conversación con Maven Mel. Sin presentación de ventas: hablamos de cómo convertir tus datos en decisiones que mueven tu negocio.",
  },
  "/redes": {
    title: "Redes y contenido | Maven Mel",
    description:
      "Sigue a Maven Mel: ideas sobre cómo convertir datos en decisiones, cultura analítica y reporting que de verdad mueve resultados.",
  },
  "/costodecision": {
    title: "El costo de no decidir a tiempo | Maven Mel",
    description:
      "¿Cuánto le cuesta a tu empresa una decisión que llega tarde? Calcula el costo de no convertir tus datos en acción, con Maven Mel.",
  },
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Mantiene title + meta tags sincronizados con la ruta actual.
 * Se llama una sola vez desde Layout. Mientras el sitio sea SPA, esto le da a
 * cada página su propio título/descripción para Google (que renderiza JS).
 */
export function useSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const meta = META_BY_PATH[path] ?? META_BY_PATH["/"];
    const url = `${SITE}${path === "/" ? "" : path}`;

    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:type", "website");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertCanonical(url);
  }, [pathname]);
}
