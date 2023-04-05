<script lang="ts">
  import { zoomLevel } from "../../../store/theme";
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";
  import { _ } from "svelte-i18n";

  const zoomUp = () => {
    zoomLevel.zoom($zoomLevel + 10);
  };

  const zoomDown = () => {
    zoomLevel.zoom($zoomLevel - 10);
  };
</script>

<ConfigContainer>
  <div>
    {$_({ id: "debug.current_zoom_level", values: { percent: $zoomLevel } })}
  </div>
  <Button content={"+"} on:click={zoomUp} />
  <Button content={"-"} on:click={zoomDown} />
</ConfigContainer>
