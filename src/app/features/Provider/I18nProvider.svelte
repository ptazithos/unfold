<script lang="ts">
  import {
    register,
    init,
    getLocaleFromNavigator,
    addMessages,
  } from "svelte-i18n";
  import en from "../../../translation/en.json";

  addMessages("en", en);

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
</script>

<slot />
