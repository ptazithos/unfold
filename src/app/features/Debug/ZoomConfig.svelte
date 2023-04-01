<script lang="ts">
  import { zoomLevel } from "../../../theme/store";
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
  <Button content={"+"} onClick={zoomUp} />
  <Button content={"-"} onClick={zoomDown} />
</ConfigContainer>
