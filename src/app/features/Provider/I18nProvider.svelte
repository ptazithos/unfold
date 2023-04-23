<script lang="ts">
  import { status } from "../../../store/pretask";
  import { isLoading } from "svelte-i18n";

  $: {
    if ($isLoading === false) {
      status.doLoad("language");
    }
  }
</script>

<slot />
