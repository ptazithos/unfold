<script lang="ts">
  import { Pane, Splitpanes } from "svelte-splitpanes";
  import Shadow from "../../components/Shadow.svelte";
  import Overlay from "./components/Landing.svelte";
</script>

<div class="h-full relative">
  <Overlay />
  <Splitpanes theme="any">
    <Pane size={20} class="sidebar"><slot name="side" /></Pane>
    <Pane>
      <Splitpanes horizontal={true} theme="any">
        <Pane><slot name="main" /></Pane>
        <Pane size={30} class="bottom"><slot name="bottom" /></Pane>
      </Splitpanes>
    </Pane>
  </Splitpanes>
</div>
