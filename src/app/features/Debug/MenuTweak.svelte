<script lang="ts">
  import { menuConfig } from "../../../store/menu";
  import Button from "../../components/Button.svelte";
  import ConfigContainer from "./components/ConfigContainer.svelte";
  import { _ } from "svelte-i18n";

  const triggerMenu = () => {
    if ($menuConfig.show) {
      menuConfig.set({ show: false, pos: { x: 0, y: 0 }, content: null });
    } else {
      menuConfig.set({
        show: true,
        pos: {
          x: Math.round(Math.random() * 25),
          y: Math.round(Math.random() * 25),
        },
        content: "Hello menu",
      });
    }
  };
</script>

<ConfigContainer>
  <div>
    {$_({
      id: "debug.current_menu_status",
      values: {
        shown: $menuConfig.show ? "shown" : "hide",
        x: $menuConfig.pos.x,
        y: $menuConfig.pos.y,
      },
    })}
  </div>
  <Button content={$_({ id: "debug.trigger_menu" })} onClick={triggerMenu} />
</ConfigContainer>
