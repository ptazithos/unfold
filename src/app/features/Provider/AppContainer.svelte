<script lang="ts">
  import ThemeProvider from "./ThemeProvider.svelte";
  import I18nProvider from "./I18nProvider.svelte";
  import FloatContentProvider from "./FloatContentProvider.svelte";
  import ApiContextProvider from "./APIProvider/index.svelte";

  import { status } from "../../../store/pretask";
</script>

<ApiContextProvider>
  <ThemeProvider>
    <I18nProvider>
      <FloatContentProvider>
        {#if !$status}
          <div
            class="fixed h-full w-full flex items-center justify-center bg-opacity-50 bg-dark-900"
          >
            <i
              class="fa-duotone fa-spinner-third fa-spin fa-2xl"
              style="--fa-primary-color: #edda63; --fa-secondary-color: #edda63;"
            />
          </div>
        {/if}

        <slot />
      </FloatContentProvider>
    </I18nProvider>
  </ThemeProvider>
</ApiContextProvider>
