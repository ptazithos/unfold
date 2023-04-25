<script lang="ts">
  import { _ } from "svelte-i18n";
  import Shadow from "unfold/app/components/Shadow.svelte";
</script>

<Shadow fullScreen={false}>
  {$_({ id: "landing.annotation" })}
</Shadow>
