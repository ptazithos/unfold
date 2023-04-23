<script lang="ts">
  import ThemeProvider from "../ThemeProvider.svelte";
  import I18nProvider from "../I18nProvider.svelte";
  import FloatContentProvider from "../FloatContentProvider.svelte";
  import ApiContextProvider from "../APIProvider/index.svelte";
  import Loading from "./components/loading.svelte";

  import { status } from "../../../../store/pretask";
</script>

<ApiContextProvider>
  <ThemeProvider>
    <I18nProvider>
      <FloatContentProvider>
        {#if !$status}<Loading />{/if}

        <slot />
      </FloatContentProvider>
    </I18nProvider>
  </ThemeProvider>
</ApiContextProvider>
