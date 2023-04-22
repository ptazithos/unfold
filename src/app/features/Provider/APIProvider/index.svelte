<script lang="ts">
  import { onMount } from "svelte";
  import BROWSER from "./api/browser/index";
  import TAURI from "./api/tauri/index";
  import { info } from "tauri-plugin-log-api";

  const APIModule = !!window.__TAURI__ ? TAURI : BROWSER;
  const APIs = Object.entries(APIModule);
  let isReady = false;

  const APIPromises = APIs.map(([name, api]) => {
    console.info(name);
    return api.initAPI();
  });

  onMount(() => {
    Promise.all(APIPromises)
      .then(() => {
        isReady = true;
      })
      .catch((err) => {
        info(JSON.stringify("err1"));
      });
  });

  $: {
    if (isReady === true) {
      APIs.map(([name, api]) => {
        api.registerAPI();
      });
    }
  }
</script>

{#if isReady}
  <slot />
{/if}
