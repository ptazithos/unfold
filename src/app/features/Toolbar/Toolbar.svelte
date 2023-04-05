<script lang="ts">
  import type { RegistryConfig } from "./types";
  import MenuRegistry from "./components/MenuRegistry.svelte";
  const REGISTRY_CONFIGS: RegistryConfig[] = [
    {
      name: "File",
      items: [],
    },
    {
      name: "Edit",
      items: [],
    },
    {
      name: "View",
      items: [],
    },
    {
      name: "Help",
      items: [],
    },
  ];
</script>

<div class="w-full h-6 bg-$background-2 flex items-center">
  {#each REGISTRY_CONFIGS as config, i}
    <MenuRegistry {config} />
  {/each}
</div>
