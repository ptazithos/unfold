<script lang="ts">
  import { scenario } from "unfold/store/app";

  $: {
    if ($scenario) {
      console.log($scenario);
    }
  }
</script>
