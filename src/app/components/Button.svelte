<script lang="ts">
  export let content: string = "Content not assigned";
</script>

<button on:click on:mousedown class="hover:bg-$highlight-1 px-2"
  >{content}</button
>
