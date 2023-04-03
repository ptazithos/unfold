<script lang="ts">
  import { theme } from "../store/theme";
  import AppContainer from "./features/Provider/AppContainer.svelte";
  import Toolbar from "./features/Toolbar/Toolbar.svelte";
  import ThemeSwitcher from "./features/Debug/ThemeSwitcher.svelte";
  import ZoomConfig from "./features/Debug/ZoomConfig.svelte";
  import LanguageSwitcher from "./features/Debug/LanguageSwitcher.svelte";
  import MenuTweak from "./features/Debug/FloatTweak.svelte";
</script>

<AppContainer>
  <Toolbar />
  <ThemeSwitcher />
  <LanguageSwitcher />
  <ZoomConfig />
  <MenuTweak />
</AppContainer>
