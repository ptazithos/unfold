export enum ItemType {
  SubMenu = "sub_menu",
  Separator = "separator",
  Item = "item",
}

export interface Item {
  type: ItemType.Item;
  name: string;
  action: () => void;
}

export interface SubMenu {
  type: ItemType.SubMenu;
  name: string;
  items: Item[];
}

export interface Separator {
  type: ItemType.Separator;
}

export interface RegistryConfig {
  name: string;
  items: (Item | SubMenu | Separator)[];
}
