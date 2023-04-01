<script lang="ts">
  import ThemeProvider from "./ThemeProvider.svelte";
</script>

<ThemeProvider>
  <div class="h-screen bg-$background-1">
    <slot />
  </div>
</ThemeProvider>
