<script lang="ts">
  import { getContext } from "svelte";
  import { ItemType } from "./types";
  import { fileConfig } from "./configs/file";
  import { editConfig } from "./configs/edit";

  import { appStatus, AppStatus, scenario } from "unfold/store/app";
  import MenuRegistry from "./components/MenuRegistry.svelte";

  const api = getContext("native_api");

  let REGISTRY_CONFIGS = [];

  $: {
    const enable = $appStatus === AppStatus.LOADED;

    REGISTRY_CONFIGS = [
      fileConfig({ api, appStatus: $appStatus, scenario: $scenario }),
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
  }
</script>

<div class="w-full h-6 bg-$background-2 flex items-center">
  {#each REGISTRY_CONFIGS as config}
    <MenuRegistry {config} />
  {/each}
</div>
