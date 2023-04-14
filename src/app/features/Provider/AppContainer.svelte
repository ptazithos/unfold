<script lang="ts">
  import ThemeProvider from "./ThemeProvider.svelte";
  import I18nProvider from "./I18nProvider.svelte";
  import FloatContentProvider from "./FloatContentProvider.svelte";
  import ApiContextProvider from "./APIProvider/index.svelte";
</script>

<ApiContextProvider>
  <ThemeProvider>
    <I18nProvider>
      <FloatContentProvider>
        <slot />
      </FloatContentProvider>
    </I18nProvider>
  </ThemeProvider>
</ApiContextProvider>
