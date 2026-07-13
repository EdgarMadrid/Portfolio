import { router } from "/src/app/router";

export function enableRouter() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();

    window.history.pushState({}, "", link.href);

    router();
  });

  window.addEventListener("popstate", router);
}
