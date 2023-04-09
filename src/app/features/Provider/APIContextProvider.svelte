<script lang="ts">
  import { setContext } from "svelte";

  setContext("native_api", {});

  if (!!window.__TAURI__) {
    // code is running in tauri environment
    console.log("Tauri environment detected");
  } else {
    // code may be running in a browser
    console.log("Browser environment detected");
  }
</script>

<slot />
