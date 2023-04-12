<script lang="ts">
  import { setContext } from "svelte";
  import { open } from "@tauri-apps/api/dialog";

  const env = !!window.__TAURI__ ? "TAURI" : "WEB";

  setContext("native_api", {});

  switch (env) {
    case "TAURI": {
      setContext("native_api", {
        openFile: async () => {
          const selected = await open({
            multiple: false,
          });

          console.log(selected);
        },
      });
      break;
    }
    case "WEB": {
      setContext("native_api", {
        openFile: () => {},
      });
      break;
    }
  }
</script>

<slot />
