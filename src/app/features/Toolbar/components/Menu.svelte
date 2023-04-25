<script lang="ts">
  import { afterUpdate } from "svelte";
  import type { Item, Separator, SubMenu } from "../types";
  import { ItemType } from "../types";
  import { _ } from "svelte-i18n";

  export let items: (Item | SubMenu | Separator)[];
  export let enable = true;

  let parent: HTMLElement;
  let rect = { width: 0 };
  let shouldSubMenuShowOff = new Array(items.length).fill(false);

  afterUpdate(() => {
    const menuWidth = parent.getBoundingClientRect().width;
    if (rect.width != menuWidth) rect.width = menuWidth;
  });

  const onHover = (index: number) => {
    clearTimeout(handler);
    shouldSubMenuShowOff[index] = true;
  };

  let handler;
  const onLeave = (index: number) => {
    handler = setTimeout(() => {
      shouldSubMenuShowOff[index] = false;
    }, 100);
  };

  const onSubMenuFocus = (index: number) => {
    clearTimeout(handler);
  };
</script>

<div class="bg-$background-1 border-$border-1 border-2" bind:this={parent}>
  {#each items as item, i}
    {#if item.type === ItemType.Separator}
      <div class="border-$separator-1 border-1 my-1.5" />
    {:else if item.type === ItemType.Item}
      {@const isEnable = (item.enable ?? true) && enable}
      <div
        class={`hover:bg-$highlight-1 px-6 ${
          isEnable ? "text-$font-highlight" : ""
        }  whitespace-nowrap`}
        on:mousedown={isEnable ? item.action : () => {}}
      >
        {$_(item.name)}
      </div>
    {:else if item.type === ItemType.SubMenu}
      {@const isEnable = (item.enable ?? true) && enable}
      <div class="relative">
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div
          class={` hover:bg-$highlight-1 px-6 ${
            isEnable ? "text-$font-highlight" : ""
          }`}
          on:mouseover={() => {
            onHover(i);
          }}
          on:mouseleave={() => {
            onLeave(i);
          }}
        >
          {$_(item.name)}
        </div>
        {#if shouldSubMenuShowOff[i]}
          <!-- svelte-ignore a11y-mouse-events-have-key-events -->
          <div
            class="absolute top-0"
            style={`left:${rect.width}px;`}
            on:mouseover={() => {
              onSubMenuFocus(i);
            }}
            on:mouseleave={() => {
              onLeave(i);
            }}
          >
            <svelte:self items={item.items} enable={isEnable} />
          </div>
        {/if}
      </div>
    {/if}
  {/each}
</div>
