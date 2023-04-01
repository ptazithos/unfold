<script lang="ts">
  import ThemeProvider from "./ThemeProvider.svelte";
  import I18nProvider from "./I18nProvider.svelte";
</script>

<ThemeProvider>
  <I18nProvider>
    <div class="h-screen bg-$background-1">
      <slot />
    </div>
  </I18nProvider>
</ThemeProvider>
