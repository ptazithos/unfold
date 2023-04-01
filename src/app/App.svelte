<script lang="ts">
  import { theme } from "../theme/store";
  import AppContainer from "./features/Provider/AppContainer.svelte";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import ThemeSwitcher from "./features/Debug/ThemeSwitcher.svelte";
  import ZoomConfig from "./features/Debug/ZoomConfig.svelte";
</script>

<AppContainer>
  <Toolbar />
  <ThemeSwitcher />
  <ZoomConfig />
</AppContainer>
