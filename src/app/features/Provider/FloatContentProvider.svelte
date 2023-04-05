<script lang="ts">
  import { shown, position, component, hide } from "../../../store/float";
</script>

<div on:mousedown={hide} class="h-screen">
  {#if $shown}
    <div
      class="absolute"
      style={`left:${$position.x}rem; top: ${$position.y}rem`}
    >
      <svelte:component this={$component} />
    </div>
  {/if}
  <slot />
</div>
