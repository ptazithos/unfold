import App from "./app/App.svelte";
import 'virtual:windi.css'


const app = new App({
  target: document.getElementById("app"),
});

export default app;
