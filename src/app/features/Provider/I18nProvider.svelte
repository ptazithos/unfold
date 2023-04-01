<script lang="ts">
  import {
    register,
    init,
    getLocaleFromNavigator,
    addMessages,
  } from "svelte-i18n";
  import en from "../../../translation/en.json";
  import cn from "../../../translation/cn.json";

  addMessages("en", en);
  addMessages("cn", cn);

  init({
    fallbackLocale: "en",
    initialLocale: "en",
  });
</script>

<slot />
