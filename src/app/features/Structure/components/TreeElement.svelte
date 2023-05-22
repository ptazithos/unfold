<script lang="ts">
  import { type TreeElement, ElementType } from "./type";
  import TreeItem from "./TreeItem.svelte";
  import TreeSet from "./TreeSet.svelte";

  export let config: TreeElement;
  const { label, type } = config;

  let component = null;
  $: {
    switch (type) {
      case ElementType.Item:
        component = TreeItem;
        break;
      case ElementType.Set:
        component = TreeSet;
        break;
      default:
        component = null;
    }
  }
</script>

<div>
  <p>{label}</p>
  {#if component}
    <svelte:component this={component} />
  {:else}
    <p>No component selected</p>
  {/if}
</div>
