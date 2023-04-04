<script lang="ts">
  interface Item {
    name: string;
    action: () => void;
  }

  interface SubMenu {
    name: string;
    items: Item[];
  }

  interface RegistryConfig {
    name: string;
    items: (Item | SubMenu)[];
  }

  const REGISTRY_CONFIGS: RegistryConfig[] = [];
</script>
