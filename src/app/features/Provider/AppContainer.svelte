<script lang="ts">
  import ThemeProvider from "./ThemeProvider.svelte";
  import I18nProvider from "./I18nProvider.svelte";
  import FloatContentProvider from "./FloatContentProvider.svelte";
</script>

<ThemeProvider>
  <I18nProvider>
    <FloatContentProvider>
      <slot />
    </FloatContentProvider>
  </I18nProvider>
</ThemeProvider>
