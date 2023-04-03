<script lang="ts">
  import ThemeProvider from "./ThemeProvider.svelte";
  import I18nProvider from "./I18nProvider.svelte";
  import FloatContent from "./FloatContent.svelte";
</script>

<ThemeProvider>
  <I18nProvider>
    <div class="h-screen bg-$background-1 select-none">
      <FloatContent />
      <slot />
    </div>
  </I18nProvider>
</ThemeProvider>
