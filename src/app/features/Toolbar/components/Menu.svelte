<script lang="ts">
  import { onMount } from "svelte";
  import type { Item, Separator, SubMenu } from "../types";
  import { ItemType } from "../types";
  import { _ } from "svelte-i18n";

  export let items: (Item | SubMenu | Separator)[];
  let parent: HTMLElement;
  let rect = { width: 0 };

  onMount(() => {
    rect.width = parent.getBoundingClientRect().width;
  });
</script>

<div class="bg-$background-1 border-$border-1 border-2" bind:this={parent}>
  {#each items as item, i}
    {#if item.type === ItemType.Separator}
      <div class="border-$separator-1 border-1 my-1.5" />
    {:else if item.type === ItemType.Item}
      <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
        {$_(item.name)}
      </div>
    {:else if item.type === ItemType.SubMenu}
      <div class="relative">
        <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
          {$_(item.name)}
        </div>
        <div class="absolute top-0" style={`left:${rect.width}px;`}>
          <svelte:self items={item.items} />
        </div>
      </div>
    {/if}
  {/each}
</div>
