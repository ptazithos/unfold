<script lang="ts">
  import { theme, ThemeName } from "../../../theme/store";
  import Button from "../../components/Button.svelte";

  function changeTheme() {
    if ($theme === ThemeName.DEFAULT) {
      theme.set(ThemeName.MONOKAI);
    } else {
      theme.set(ThemeName.DEFAULT);
    }
  }
</script>

<div class="p-2 border-1 inline-block">
  <div>Current System is {$theme}</div>
  <Button content={"Switch Theme"} onClick={changeTheme} />
</div>
