<script lang="ts">
  import { shown, position, component, hide, args } from "../../../store/float";
  const hideMenu = () => {
    hide();
  };
</script>

<div on:mousedown={hideMenu} class="h-screen">
  {#if $shown}
    <div
      class="absolute z-1"
      style={`left:${$position.x}rem; top: ${$position.y}rem`}
    >
      <svelte:component this={$component} {...$args} />
    </div>
  {/if}
  <slot />
</div>
