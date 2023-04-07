<script lang="ts">
  import type { RegistryConfig } from "./types";
  import MenuRegistry from "./components/MenuRegistry.svelte";

  const REGISTRY_CONFIGS: RegistryConfig[] = [
    {
      name: "toolbar.file",
      items: [
        { name: "Open file", action: () => {} },
        { name: "Save", action: () => {} },
        { name: "Save as json", action: () => {} },
        { name: "Close", action: () => {} },
        { name: "Preference", action: () => {} },
      ],
    },
    {
      name: "toolbar.edit",
      items: [],
    },
    {
      name: "toolbar.view",
      items: [],
    },
    {
      name: "toolbar.help",
      items: [],
    },
  ];
</script>

<div class="w-full h-6 bg-$background-2 flex items-center">
  {#each REGISTRY_CONFIGS as config, i}
    <MenuRegistry {config} />
  {/each}
</div>
