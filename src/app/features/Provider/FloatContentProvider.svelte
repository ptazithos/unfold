<script lang="ts">
  import { shown, position, component, hide } from "../../../store/float";
  const hideMenu = () => {
    hide();
  };
</script>

<div on:mousedown={hideMenu} class="h-screen">
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
