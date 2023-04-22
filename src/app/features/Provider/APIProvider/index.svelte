<script lang="ts">
  import { setContext } from "svelte";
  import log from "loglevel";

  import BROWSER from "./api/browser/index";
  import TAURI from "./api/tauri/index";

  const API = !!window.__TAURI__ ? TAURI : BROWSER;

  for (const [name, api] of Object.entries(API)) {
    log.debug(`API Module ${name} init`);
    api.initAPI();
  }

  setContext("native_api", {
    openFile: API.Dialog.openFile,
  });
</script>

<slot />
