<script lang="ts">
  import { _ } from "svelte-i18n";
  import type { RegistryConfig } from "../types";
  import { shown, show, update, hide } from "../../../../store/float";
  import Menu from "./Menu.svelte";

  export let config: RegistryConfig;

  const triggerMenu = () => {
    if ($shown) {
      hide();
    } else {
      show(
        {
          x: Math.round(Math.random() * 24),
          y: Math.round(Math.random() * 24),
        },
        Menu
      );
    }
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

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
  on:click|stopPropagation={triggerMenu}
  on:mouseover={updateMenu}
  class="hover:bg-$highlight-1 hover:text-$font-highlight  px-1.5"
>
  {$_(config.name)}
</button>
