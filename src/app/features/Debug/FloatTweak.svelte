<script lang="ts">
  import { shown, position, show, hide } from "../../../store/float";
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";
  import { _ } from "svelte-i18n";
  import HelloWorld from "./components/HelloWorld.svelte";

  const trigger = (event) => {
    event.stopPropagation();
    if ($shown) {
      hide();
    } else {
      show(
        {
          x: Math.round(Math.random() * 24),
          y: Math.round(Math.random() * 24),
        },
        HelloWorld
      );
    }
  };
</script>

<ConfigContainer>
  <div>
    {$_({
      id: "debug.current_menu_status",
      values: {
        shown: $shown ? "shown" : "hide",
        x: $position.x.toFixed(1),
        y: $position.y.toFixed(1),
      },
    })}
  </div>
  <Button content={$_({ id: "debug.trigger_menu" })} on:mousedown={trigger} />
</ConfigContainer>
