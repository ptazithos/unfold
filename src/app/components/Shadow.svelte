<script lang="ts">
  export let position: "fixed" | "absolute";
  export let transparent = true;
</script>

<div
  class={`${position} inset-0 bg-black ${
    transparent ? "opacity-50" : ""
  } flex justify-center items-center font-bold text-2xl`}
>
  <slot />
</div>
