<script lang="ts">
  import TreeElement from "./TreeElement.svelte";
  import type { TreeSet } from "./type";

  export let config: TreeSet;
  const { label, elements } = config;
</script>

<div>
  {label}
  {#each elements as eleConfig}
    <TreeElement config={eleConfig} />
  {/each}
</div>
