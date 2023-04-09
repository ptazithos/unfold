import { ItemType, type RegistryConfig } from "../types";

export const FILE_CONFIG: RegistryConfig = {
  name: "toolbar.file",
  items: [
    { type: ItemType.Item, name: "menu.file.open_file", action: () => {} },
    { type: ItemType.Separator },
    { type: ItemType.Item, name: "menu.file.save", action: () => {} },
    {
      type: ItemType.Item,
      name: "menu.file.save_as_json",
      action: () => {},
    },
    { type: ItemType.Separator },
    {
      type: ItemType.SubMenu,
      name: "menu.file.preference",
      items: [
        { type: ItemType.Item, name: "Settings", action: () => {} },
        { type: ItemType.Item, name: "Appearance", action: () => {} },
      ],
    },
    { type: ItemType.Item, name: "menu.file.close", action: () => {} },
  ],
};
