import App from "./app/App.svelte";
import "virtual:windi.css";
import "./theme/styles/theme.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
