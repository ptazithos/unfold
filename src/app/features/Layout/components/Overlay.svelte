<script lang="ts">
  import { _ } from "svelte-i18n";
  import Shadow from "unfold/app/components/Shadow.svelte";
  import { AppStatus, appStatus } from "unfold/store/app";

  let fullScreen = false;
  $: {
    fullScreen = $appStatus === AppStatus.LOADING;
  }
</script>

<Shadow {fullScreen}>
  {$_({ id: "landing.annotation" })}
</Shadow>
