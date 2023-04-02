<script lang="ts">
  import { menuConfig } from "../../../store/menu";
</script>

{#if $menuConfig.show}
  <div
    class="absolute"
    style={`left:${$menuConfig.pos.x}rem; top: ${$menuConfig.pos.y}rem`}
  >
    {$menuConfig.content}
  </div>
{/if}
