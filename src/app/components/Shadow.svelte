<script lang="ts">
  export let position: "fixed" | "absolute";
  export let opacity = 50;
</script>

<div
  class={`${position} inset-0 bg-black opacity-${opacity} flex justify-center items-center font-bold text-2xl`}
>
  <slot />
</div>
