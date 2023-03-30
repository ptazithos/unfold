import App from "./app/App.svelte";
import 'virtual:windi.css'
import './theme/theme.css'


const app = new App({
  target: document.getElementById("app"),
});

export default app;
