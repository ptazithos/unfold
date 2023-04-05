export interface Item {
  name: string;
  action: () => void;
}

export interface SubMenu {
  name: string;
  items: Item[];
}

export interface RegistryConfig {
  name: string;
  items: (Item | SubMenu)[];
}
