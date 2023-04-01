<script lang="ts">
  import { theme, ThemeName } from "../theme/store";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import ThemeSwitcher from "./features/Debug/ThemeSwitcher.svelte";
  import ZoomConfig from "./features/Debug/ZoomConfig.svelte";
</script>

<main class={$theme}>
  <div class="h-screen bg-$background-1">
    <Toolbar />
    <ThemeSwitcher />
    <ZoomConfig />
  </div>
</main>
