<script lang="ts">
  export let fullScreen: boolean;
</script>

<div
  class={`${
    fullScreen ? "fixed" : "absolute"
  } inset-0 bg-black opacity-50 flex justify-center items-center font-bold text-2xl z-1`}
>
  <slot />
</div>
