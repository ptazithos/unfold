<script lang="ts">
  import { getContext } from "svelte";
  import { ItemType, type RegistryConfig } from "./types";
  import { fileConfig } from "./configs/file";
  import { editConfig } from "./configs/edit";

  import appStatus, { AppStatus } from "unfold/store/status";
  import MenuRegistry from "./components/MenuRegistry.svelte";

  const api = getContext("native_api");
  const enable = $appStatus === AppStatus.LOADED;

  const REGISTRY_CONFIGS: RegistryConfig[] = [
    fileConfig({ api, appStatus: $appStatus }),
    editConfig({ enable }),
    {
      name: "toolbar.view",
      items: [
        {
          type: ItemType.Item,
          name: "menu.view.output",
          enable,
          action: () => {},
        },
      ],
    },
    {
      name: "toolbar.help",
      items: [
        {
          type: ItemType.Item,
          name: "menu.help.about",
          enable: true,
          action: () => {},
        },
      ],
    },
  ];
</script>

<div class="w-full h-6 bg-$background-2 flex items-center">
  {#each REGISTRY_CONFIGS as config, i}
    <MenuRegistry {config} />
  {/each}
</div>
