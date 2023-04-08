<script lang="ts">
  import type { Item, Separator, SubMenu } from "../types";
  import { ItemType } from "../types";
  import { _ } from "svelte-i18n";

  export let items: (Item | SubMenu | Separator)[];
</script>

<div class="bg-$background-1 border-$border-1 border-2">
  {#each items as item, i}
    {#if item.type === ItemType.Separator}
      <div class="border-$separator-1 border-1 my-1.5" />
    {:else if item.type === ItemType.Item}
      <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
        {$_(item.name)}
      </div>
    {/if}
  {/each}
</div>
