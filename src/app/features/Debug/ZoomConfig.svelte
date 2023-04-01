<script lang="ts">
  import { zoomLevel } from "../../../theme/store";

  const zoomUp = () => {
    zoomLevel.zoom($zoomLevel + 10);
  };

  const zoomDown = () => {
    zoomLevel.zoom($zoomLevel - 10);
  };
</script>

<div>
  <div>Current zoom level is {$zoomLevel}%</div>
  <button on:click={zoomUp} class="hover:bg-$highlight-1 px-2">+</button>
  <button on:click={zoomDown} class="hover:bg-$highlight-1 px-2">-</button>
</div>
