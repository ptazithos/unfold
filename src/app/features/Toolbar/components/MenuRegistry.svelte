<script lang="ts">
  import { _ } from "svelte-i18n";
  import type { RegistryConfig } from "../types";
  import { shown, show, update, hide } from "../../../../store/float";
  import Menu from "./Menu.svelte";

  export let config: RegistryConfig;
  let element;

  const getCurrentPosition = () => {
    const rect = (element as HTMLButtonElement).getBoundingClientRect();
    return [rect.left, rect.bottom];
  };

  const triggerMenu = () => {
    if ($shown) {
      hide();
    } else {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      console.log(rootFontSize);
      show(
        {
          x: getCurrentPosition()[0] / rootFontSize,
          y: getCurrentPosition()[1] / rootFontSize,
        },
        Menu,
        { items: config.items }
      );
    }
  };

  const updateMenu = () => {
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    console.log(rootFontSize);
    update(
      {
        x: getCurrentPosition()[0] / rootFontSize,
        y: getCurrentPosition()[1] / rootFontSize,
      },
      Menu,
      { items: config.items }
    );
  };
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
  on:mousedown|stopPropagation={triggerMenu}
  on:mouseover={updateMenu}
  bind:this={element}
  class="hover:bg-$highlight-1 hover:text-$font-highlight px-1.5"
>
  {$_(config.name)}
</button>
