<script lang="ts">
  import type { RegistryConfig } from "./types";
  import MenuRegistry from "./components/MenuRegistry.svelte";

  const REGISTRY_CONFIGS: RegistryConfig[] = [
    {
      name: "toolbar.file",
      items: [
        { name: "menu.file.open_file", action: () => {} },
        { name: "separator" },
        { name: "menu.file.save", action: () => {} },
        { name: "menu.file.save_as_json", action: () => {} },
        { name: "separator" },
        { name: "menu.file.close", action: () => {} },
        { name: "menu.file.preference", action: () => {} },
      ],
    },
    {
      name: "toolbar.edit",
      items: [
        { name: "menu.edit.undo", action: () => {} },
        { name: "separator" },
        { name: "menu.edit.cut", action: () => {} },
        { name: "menu.edit.copy", action: () => {} },
        { name: "menu.edit.paste", action: () => {} },
      ],
    },
    {
      name: "toolbar.view",
      items: [{ name: "menu.view.output", action: () => {} }],
    },
    {
      name: "toolbar.help",
      items: [{ name: "menu.help.about", action: () => {} }],
    },
  ];
</script>

<div class="w-full h-6 bg-$background-2 flex items-center">
  {#each REGISTRY_CONFIGS as config, i}
    <MenuRegistry {config} />
  {/each}
</div>
