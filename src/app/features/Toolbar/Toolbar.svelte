<script lang="ts">
  import { ItemType, type RegistryConfig } from "./types";
  import MenuRegistry from "./components/MenuRegistry.svelte";

  const REGISTRY_CONFIGS: RegistryConfig[] = [
    {
      name: "toolbar.file",
      items: [
        { type: ItemType.Item, name: "menu.file.open_file", action: () => {} },
        { type: ItemType.Separator },
        { type: ItemType.Item, name: "menu.file.save", action: () => {} },
        {
          type: ItemType.Item,
          name: "menu.file.save_as_json",
          action: () => {},
        },
        { type: ItemType.Separator },
        { type: ItemType.Item, name: "menu.file.close", action: () => {} },
        { type: ItemType.Item, name: "menu.file.preference", action: () => {} },
      ],
    },
    {
      name: "toolbar.edit",
      items: [
        { type: ItemType.Item, name: "menu.edit.undo", action: () => {} },
        { type: ItemType.Separator },
        { type: ItemType.Item, name: "menu.edit.cut", action: () => {} },
        { type: ItemType.Item, name: "menu.edit.copy", action: () => {} },
        { type: ItemType.Item, name: "menu.edit.paste", action: () => {} },
      ],
    },
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
