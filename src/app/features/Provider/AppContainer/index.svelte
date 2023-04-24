<script lang="ts">
  import ThemeProvider from "../ThemeProvider.svelte";
  import I18nProvider from "../I18nProvider.svelte";
  import FloatContentProvider from "../FloatContentProvider.svelte";
  import ApiContextProvider from "../APIProvider/index.svelte";
  import SplashScreen from "./components/SplashScreen.svelte";

  import { status } from "unfold/store/pretask";
</script>

<ThemeProvider>
  <I18nProvider>
    <ApiContextProvider>
      {#if !$status}<SplashScreen />
      {:else}
        <FloatContentProvider>
          <slot />
        </FloatContentProvider>
      {/if}
    </ApiContextProvider>
  </I18nProvider>
</ThemeProvider>
