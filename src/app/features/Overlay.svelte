<script lang="ts">
  import { content } from "unfold/store/overlay";
  import Shadow from "../components/Shadow.svelte";
</script>

{#if $content}
  <Shadow position="fixed"><svelte:component this={$content} /></Shadow>
{/if}
