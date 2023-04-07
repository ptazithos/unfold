<script lang="ts">
  import type { Item, SubMenu } from "../types";
  export let items: (Item | SubMenu)[];
  console.log(items);
</script>

<div class="bg-$background-1 p-1 border-$border-1 border-2">
  <!-- <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
    Hello world
  </div>
  <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
    Hello world
  </div>
  <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
    Hello world
  </div> -->
  {#each items as item, i}
    <div class=" hover:bg-$highlight-1 px-6 text-$font-highlight">
      {item.name}
    </div>
  {/each}
</div>
