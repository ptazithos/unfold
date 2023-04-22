<script lang="ts">
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";
  import { language, _ } from "../../../store/language";

  function switchLanguage() {
    if ($language === "en") {
      language.switch("cn");
    } else {
      language.switch("en");
    }
  }
</script>

<ConfigContainer>
  <div>
    {$_({ id: "debug.current_language", values: { language: $language } })}
  </div>
  <Button
    content={$_({ id: "debug.switch_language" })}
    on:click={switchLanguage}
  />
</ConfigContainer>
