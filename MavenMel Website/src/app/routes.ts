import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Servicios } from "./pages/Servicios";
import { SobreMi } from "./pages/SobreMi";
import { Diagnostico } from "./pages/Diagnostico";
import { Contacto } from "./pages/Contacto";
import { Redes } from "./pages/Redes";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Servicios },
      { path: "sobre-mi", Component: SobreMi },
      { path: "diagnostico", Component: Diagnostico },
      { path: "contacto", Component: Contacto },
      { path: "redes", Component: Redes },
    ],
  },
]);
