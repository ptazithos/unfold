<script lang="ts">
  import { Pane, Splitpanes } from "svelte-splitpanes";
  import AppContainer from "./features/Provider/AppContainer/index.svelte";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import Layout from "./features/Layout/index.svelte";
  import DebugDashboard from "./features/Debug/DebugDashboard.svelte";
  import Overlay from "./features/Overlay.svelte";
</script>

<AppContainer>
  <Overlay />
  <Toolbar />
  <Layout><DebugDashboard slot="main" /></Layout>
</AppContainer>
