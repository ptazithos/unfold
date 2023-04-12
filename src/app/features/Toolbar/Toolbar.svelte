<script lang="ts">
  import { getContext } from "svelte";
  import { ItemType, type RegistryConfig } from "./types";
  import MenuRegistry from "./components/MenuRegistry.svelte";
  import { fileConfig } from "./configs/file";
  import { EDIT_CONFIG } from "./configs/edit";

  const api = getContext("native_api");

  const REGISTRY_CONFIGS: RegistryConfig[] = [
    fileConfig(api),
    EDIT_CONFIG,
    {
      name: "toolbar.view",
      items: [
        { type: ItemType.Item, name: "menu.view.output", action: () => {} },
      ],
    },
    {
      name: "toolbar.help",
      items: [
        { type: ItemType.Item, name: "menu.help.about", action: () => {} },
      ],
    },
  ];
</script>

<div class="w-full h-6 bg-$background-2 flex items-center">
  {#each REGISTRY_CONFIGS as config, i}
    <MenuRegistry {config} />
  {/each}
</div>
