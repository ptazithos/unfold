import App from "./app/App.svelte";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./global.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
