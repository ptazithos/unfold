<script lang="ts">
  export let condition: boolean = false;
</script>

{#if condition}
  <slot />
{/if}
