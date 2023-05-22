<script lang="ts">
  import AppContainer from "./features/Provider/AppContainer/index.svelte";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import Layout from "./features/Layout/index.svelte";
  import DebugDashboard from "./features/Debug/DebugDashboard.svelte";
  import Structure from "./features/Structure/index.svelte";
  import Overlay from "./features/Overlay.svelte";
</script>

<AppContainer>
  <Toolbar />
  <Layout><DebugDashboard slot="main" /><Structure slot="side" /></Layout>
  <Overlay />
</AppContainer>
