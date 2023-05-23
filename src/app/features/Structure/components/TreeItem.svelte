<script lang="ts">
  import type { TreeItem } from "./type";

  export let config: TreeItem;
  const { label } = config;
</script>

<div>
  {label}
</div>
