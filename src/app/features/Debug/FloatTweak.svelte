<script lang="ts">
  import { shown, position, component } from "../../../store/float";
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";
  import { _ } from "svelte-i18n";
  import HelloWorld from "./components/HelloWorld.svelte";

  const trigger = () => {
    if ($shown) {
      shown.set(false);
      component.set(null);
    } else {
      shown.set(true);
      position.set({
        x: Math.round(Math.random() * 24),
        y: Math.round(Math.random() * 24),
      });
      component.set(HelloWorld);
    }
  };
</script>

<ConfigContainer>
  <div>
    {$_({
      id: "debug.current_menu_status",
      values: {
        shown: $shown ? "shown" : "hide",
        x: $position.x,
        y: $position.y,
      },
    })}
  </div>
  <Button content={$_({ id: "debug.trigger_menu" })} onClick={trigger} />
</ConfigContainer>
