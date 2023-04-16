<script lang="ts">
  import { Pane, Splitpanes } from "svelte-splitpanes";
  import AppContainer from "./features/Provider/AppContainer.svelte";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import DebugDashboard from "./features/Debug/DebugDashboard.svelte";
</script>

<AppContainer>
  <Toolbar />
  <Splitpanes theme="any">
    <Pane size={20} class="sidebar" />
    <Pane>
      <Splitpanes horizontal={true} theme="any">
        <Pane><DebugDashboard /></Pane>
        <Pane size={20} class="bottom" />
      </Splitpanes>
    </Pane>
  </Splitpanes>
</AppContainer>

<style global>
  .splitpanes__splitter {
    position: relative;
  }

  .splitpanes--vertical > .splitpanes__splitter::before {
    content: "";
    position: absolute;
    cursor: col-resize;
    height: 100%;
    left: -3px;
    right: -3px;
    z-index: 1;
  }

  .splitpanes--horizontal > .splitpanes__splitter::before {
    content: "";
    position: absolute;
    cursor: row-resize;
    width: 100%;
    top: -3px;
    bottom: -3px;
    z-index: 1;
  }

  .splitpanes__pane.sidebar {
    background-color: var(--background-2);
  }

  .splitpanes__pane.bottom {
    background-color: var(--background-3);
  }
</style>
