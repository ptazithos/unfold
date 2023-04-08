export interface Item {
  name: string;
  action: () => void;
}

export interface SubMenu {
  name: string;
  items: Item[];
}

export interface Separator {
  name: "separator";
}

export interface RegistryConfig {
  name: string;
  items: (Item | SubMenu | Separator)[];
}
