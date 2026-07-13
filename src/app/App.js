import { router } from "./router.js";
import { enableRouter } from "/src/core/events";

export const App = {
  init() {
    router();
    enableRouter();
    this.listen();
  },

  listen() {
    window.addEventListener("popstate", router);
  },
};
