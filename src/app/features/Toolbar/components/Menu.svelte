<script lang="ts">
  import type { Item, SubMenu } from "../types";
  import { _ } from "svelte-i18n";

  export let items: (Item | SubMenu)[];
</script>

<div class="bg-$background-1 p-1 border-$border-1 border-2">
  {#each items as item, i}
    <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
      {$_(item.name)}
    </div>
  {/each}
</div>
