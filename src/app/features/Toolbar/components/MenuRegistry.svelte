<script lang="ts">
  import type { RegistryConfig } from "../types";
  import { show, update } from "../../../../store/float";
  import Menu from "./Menu.svelte";
  export let config: RegistryConfig;

  const triggerMenu = () => {
    show(
      {
        x: Math.round(Math.random() * 24),
        y: Math.round(Math.random() * 24),
      },
      Menu
    );
  };

  const updateMenu = () => {
    update(
      {
        x: Math.round(Math.random() * 24),
        y: Math.round(Math.random() * 24),
      },
      Menu
    );
  };
</script>

<button
  on:focus={triggerMenu}
  on:mouseover={updateMenu}
  class="hover:bg-$highlight-1 hover:text-$font-highlight  px-1.5"
>
  {config.name}
</button>
