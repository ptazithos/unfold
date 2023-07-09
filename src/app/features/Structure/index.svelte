<script lang="ts">
  import { _ } from "svelte-i18n";
  import Triggers from "./components/Triggers.svelte";
</script>

<div>
  <div class="w-full h-6 px-4 pt-1 text-sm text-$font-disabled">
    {$_("structure.title")}
  </div>
  <Triggers />
</div>
