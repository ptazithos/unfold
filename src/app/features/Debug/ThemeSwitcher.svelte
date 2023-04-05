<script lang="ts">
  import { theme, ThemeName } from "../../../store/theme";
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";
  import { _ } from "svelte-i18n";

  function changeTheme() {
    if ($theme === ThemeName.DEFAULT) {
      theme.set(ThemeName.MONOKAI);
    } else {
      theme.set(ThemeName.DEFAULT);
    }
  }
</script>

<ConfigContainer>
  <div>{$_({ id: "debug.current_theme", values: { theme: $theme } })}</div>
  <Button content={$_({ id: "debug.switch_theme" })} on:click={changeTheme} />
</ConfigContainer>
