import { ItemType, type RegistryConfig } from "../types";

type ConfigsParam = {
  enable: boolean;
};

export const editConfig = (params: ConfigsParam): RegistryConfig => {
  const { enable } = params;

  return {
    name: "toolbar.edit",
    items: [
      { type: ItemType.Item, name: "menu.edit.undo", enable, action: () => {} },
      { type: ItemType.Separator },
      { type: ItemType.Item, name: "menu.edit.cut", enable, action: () => {} },
      { type: ItemType.Item, name: "menu.edit.copy", enable, action: () => {} },
      {
        type: ItemType.Item,
        name: "menu.edit.paste",
        enable,
        action: () => {},
      },
    ],
  };
};
