import { Loader } from "@/components/Loader/loader";
import { footerValidation } from "@/components/Footer/footerValidation";

export function render(page) {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("No existe #app en el HTML");
    return;
  }

  // loader
  app.innerHTML = Loader();

  setTimeout(() => {
    try {
      app.innerHTML = page();

      const content = app.querySelector("main");

      if (content) {
        content.classList.add("page-enter");
      }

      // Inicializar validación después de crear el HTML
      footerValidation();
    } catch (error) {
      console.error("Error renderizando página:", error);

      app.innerHTML = "<h1>Error cargando página</h1>";
    }
  }, 600);
}
