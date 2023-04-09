import { ItemType, type RegistryConfig } from "../types";

export const EDIT_CONFIG: RegistryConfig = {
  name: "toolbar.edit",
  items: [
    { type: ItemType.Item, name: "menu.edit.undo", action: () => {} },
    { type: ItemType.Separator },
    { type: ItemType.Item, name: "menu.edit.cut", action: () => {} },
    { type: ItemType.Item, name: "menu.edit.copy", action: () => {} },
    { type: ItemType.Item, name: "menu.edit.paste", action: () => {} },
  ],
};
