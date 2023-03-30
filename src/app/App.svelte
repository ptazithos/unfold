<script lang="ts">
  import { theme, ThemeName } from "../theme/store";

  function changeTheme() {
    if ($theme === ThemeName.DEFAULT) {
      theme.set(ThemeName.MONOKAI);
    } else {
      theme.set(ThemeName.DEFAULT);
    }
  }
</script>

<main class={$theme}>
  <div class="flex flex-col h-screen justify-center items-center bg-$primary-1">
    <h1>Hello Unfold</h1>
    <button on:click={changeTheme} class="bg-white">change theme</button>
  </div>
</main>
