<script lang="ts">
  import { _ } from "svelte-i18n";
  import Shadow from "unfold/app/components/Shadow.svelte";
  import { AppStatus, appStatus } from "unfold/store/app";
</script>

{#if $appStatus != AppStatus.LOADED}
  <Shadow fullScreen={false}>
    {$_({ id: "landing.annotation" })}
  </Shadow>
{/if}
