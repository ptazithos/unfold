<script lang="ts">
  import { zoomLevel } from "../../../theme/store";
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";

  const zoomUp = () => {
    zoomLevel.zoom($zoomLevel + 10);
  };

  const zoomDown = () => {
    zoomLevel.zoom($zoomLevel - 10);
  };
</script>

<ConfigContainer>
  <div>Current zoom level is {$zoomLevel}%</div>
  <Button content={"+"} onClick={zoomUp} />
  <Button content={"-"} onClick={zoomDown} />
</ConfigContainer>
