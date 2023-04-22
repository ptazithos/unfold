<script lang="ts">
  import { Pane, Splitpanes } from "svelte-splitpanes";
</script>

<Splitpanes theme="any">
  <Pane size={20} class="sidebar"><slot name="side" /></Pane>

  <Pane>
    <Splitpanes horizontal={true} theme="any">
      <Pane><slot name="main" /></Pane>
      <Pane size={30} class="bottom"><slot name="bottom" /></Pane>
    </Splitpanes>
  </Pane>
</Splitpanes>
