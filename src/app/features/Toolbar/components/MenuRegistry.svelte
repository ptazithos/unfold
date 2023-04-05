<script lang="ts">
  import type { RegistryConfig } from "../types";
  export let config: RegistryConfig;
</script>

<div class="hover:bg-$highlight-1 hover:text-$font-highlight  px-1.5">
  {config.name}
</div>
