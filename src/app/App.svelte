<script lang="ts">
  let theme = "monokai";

  function changeTheme() {
    if (theme === "monokai") {
      theme = "default";
    } else {
      theme = "monokai";
    }
  }
</script>

<main class={theme}>
  <div class="flex flex-col h-screen justify-center items-center bg-$primary-1">
    <h1>Hello Unfold</h1>
    <button class="bg-white " on:click={changeTheme}>change theme</button>
  </div>
</main>
