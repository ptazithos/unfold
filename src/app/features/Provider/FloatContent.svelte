<script lang="ts">
  import { shown, position, component } from "../../../store/float";
</script>

{#if $shown}
  <div
    class="absolute"
    style={`left:${$position.x}rem; top: ${$position.y}rem`}
  >
    <svelte:component this={$component} />
  </div>
{/if}
