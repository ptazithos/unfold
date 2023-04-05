<script lang="ts">
  import { theme } from "../../../store/theme";
</script>

<div class={$theme}>
  <div class="bg-$background-1 select-none">
    <slot />
  </div>
</div>
