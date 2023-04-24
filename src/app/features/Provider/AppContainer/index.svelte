<script lang="ts">
  import ThemeProvider from "../ThemeProvider.svelte";
  import I18nProvider from "../I18nProvider.svelte";
  import FloatContentProvider from "../FloatContentProvider.svelte";
  import ApiContextProvider from "../APIProvider/index.svelte";
  import SplashScreen from "./components/SplashScreen.svelte";

  import { status } from "unfold/store/pretask";
</script>

<ApiContextProvider>
  <ThemeProvider>
    <I18nProvider>
      <FloatContentProvider>
        {#if !$status}<SplashScreen />
        {:else}
          <slot />
        {/if}
      </FloatContentProvider>
    </I18nProvider>
  </ThemeProvider>
</ApiContextProvider>
