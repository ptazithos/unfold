<script lang="ts">
  import { menuConfig } from "../../../store/float";
</script>

{#if $menuConfig.show}
  <div
    class="absolute"
    style={`left:${$menuConfig.pos.x}rem; top: ${$menuConfig.pos.y}rem`}
  >
    <svelte:component this={$menuConfig.content} />
  </div>
{/if}
