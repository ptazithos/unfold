<script lang="ts">
  import { theme, ThemeName } from "../../../theme/store";
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";

  function changeTheme() {
    if ($theme === ThemeName.DEFAULT) {
      theme.set(ThemeName.MONOKAI);
    } else {
      theme.set(ThemeName.DEFAULT);
    }
  }
</script>

<ConfigContainer>
  <div>Current System is {$theme}</div>
  <Button content={"Switch Theme"} onClick={changeTheme} />
</ConfigContainer>
