<script lang="ts">
  import { Pane, Splitpanes } from "svelte-splitpanes";
  import AppContainer from "./features/Provider/AppContainer/index.svelte";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import Layout from "./features/Layout/index.svelte";
  import DebugDashboard from "./features/Debug/DebugDashboard.svelte";
</script>

<AppContainer>
  <Toolbar />
  <Layout><DebugDashboard slot="main" /></Layout>
</AppContainer>
