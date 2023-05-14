<script lang="ts">
  import { status } from "../../../../store/pretask";
  import BROWSER from "./api/browser/index";
  import TAURI from "./api/tauri/index";
  import SplashScreen from "./components/SplashScreen.svelte";

  const APIModule = window.__TAURI__ ? TAURI : BROWSER;
  const APIs = Object.entries(APIModule);

  const APIPromises = APIs.map(([, api]) => {
    return api.initAPI();
  });

  Promise.all(APIPromises)
    .then(() => {
      setTimeout(() => {
        status.doLoad("api");
      }, 1500);
    })
    .catch(() => {});

  $: {
    if ($status === true) {
      APIs.map(([, api]) => {
        api.registerAPI();
      });
    }
  }
</script>

{#if $status} <slot />{:else}<SplashScreen />{/if}
