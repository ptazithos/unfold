<script lang="ts">
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";
  import { _, locale } from "svelte-i18n";

  function switchLanguage() {
    if ($locale === "en") {
      locale.set("cn");
    } else {
      locale.set("en");
    }
  }
</script>

<ConfigContainer>
  <div>
    {$_({ id: "debug.current_language", values: { language: $locale } })}
  </div>
  <Button
    content={$_({ id: "debug.switch_language" })}
    onClick={switchLanguage}
  />
</ConfigContainer>
