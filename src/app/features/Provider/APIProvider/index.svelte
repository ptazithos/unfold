<script lang="ts">
  import { status } from "../../../../store/pretask";
  import BROWSER from "./api/browser/index";
  import TAURI from "./api/tauri/index";

  const APIModule = !!window.__TAURI__ ? TAURI : BROWSER;
  const APIs = Object.entries(APIModule);

  const APIPromises = APIs.map(([name, api]) => {
    return api.initAPI();
  });

  Promise.all(APIPromises)
    .then(() => {
      setTimeout(() => {
        status.doLoad("api");
      }, 1500);
    })
    .catch((err) => {});

  $: {
    if ($status === true) {
      APIs.map(([name, api]) => {
        api.registerAPI();
      });
    }
  }
</script>

<slot />
