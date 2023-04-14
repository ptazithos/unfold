<script lang="ts">
  import { setContext } from "svelte";

  import * as BROWSER from "./api/browser";
  import * as TAURI from "./api/tauri";

  const env = !!window.__TAURI__ ? "TAURI" : "WEB";

  setContext("native_api", {});

  switch (env) {
    case "TAURI": {
      setContext("native_api", {
        openFile: TAURI.openFile,
      });
      break;
    }
    case "WEB": {
      setContext("native_api", {
        openFile: BROWSER.openFile,
      });
      break;
    }
  }
</script>

<slot />
