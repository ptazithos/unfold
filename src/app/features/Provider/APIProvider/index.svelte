<script lang="ts">
  import BROWSER from "./api/browser/index";
  import TAURI from "./api/tauri/index";

  const API = !!window.__TAURI__ ? TAURI : BROWSER;

  for (const [name, api] of Object.entries({ ...API })) {
    api.initAPI();
  }
</script>

<slot />
