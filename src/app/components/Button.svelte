<script lang="ts">
  export let content: string = "Content not assigned";
  export let onClick: () => void = () => {
    console.log("Unassigned button click");
  };
</script>

<button on:click={onClick} class="hover:bg-$highlight-1 px-2">{content}</button>
