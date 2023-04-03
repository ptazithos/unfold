<script lang="ts">
  import { theme } from "../store/theme";
  import AppContainer from "./features/Provider/AppContainer.svelte";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import DebugDashboard from "./features/Debug/DebugDashboard.svelte";
</script>

<AppContainer>
  <Toolbar />
  <DebugDashboard />
</AppContainer>
