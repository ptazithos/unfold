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
        {
          type: ItemType.Item,
          name: "menu.file.sub.setting",
          action: () => {},
        },
        {
          type: ItemType.Item,
          name: "menu.file.sub.appearance",
          action: () => {},
        },
      ],
    },
    { type: ItemType.Item, name: "menu.file.close", action: () => {} },
  ],
};
