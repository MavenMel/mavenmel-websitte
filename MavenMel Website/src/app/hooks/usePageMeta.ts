import { useEffect } from "react";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Ajusta el título y la meta-descripción por página (SPA).
 * Mejora cómo se ve cada ruta en la pestaña del navegador y en Google.
 * Nota: para el preview de redes (LinkedIn/Facebook), que no ejecutan JS,
 * se requeriría prerender/SSR; esto cubre navegador y buscadores.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
  }, [title, description]);
}
