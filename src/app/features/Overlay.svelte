<script lang="ts">
  import { _ } from "svelte-i18n";
  import { fullScreen, content } from "unfold/store/overlay";
  import Shadow from "../components/Shadow.svelte";
</script>

{#if $content}
  <Shadow fullScreen={$fullScreen}>{$content}</Shadow>
{/if}
