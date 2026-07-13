import { Home } from "@/pages/Home/home";
import { render } from "./render";

const routes = {
  "/": Home,
};

const BASE = "/Portfolio";

export function router() {
  let path = window.location.pathname;

  // 🔥 quitar base de GitHub Pages
  path = path.replace(BASE, "");

  // 🔥 asegurar ruta raíz
  if (path === "" || path === "/") {
    path = "/";
  }

  const page = routes[path] || Home;

  render(page);
}
