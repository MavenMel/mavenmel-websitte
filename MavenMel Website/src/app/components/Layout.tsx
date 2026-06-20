import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useSEO } from "../lib/seo";

export function Layout() {
  const location = useLocation();

  useSEO();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
