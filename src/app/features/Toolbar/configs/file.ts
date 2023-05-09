import { AppStatus } from "unfold/store/app";
import { ItemType, type RegistryConfig } from "../types";

type FileParams = {
  api: any;
  appStatus: AppStatus;
};

export const fileConfig = (params: FileParams): RegistryConfig => {
  const { api, appStatus } = params;
  const enable = appStatus === AppStatus.LOADED;

  return {
    name: "toolbar.file",
    items: [
      {
        type: ItemType.Item,
        name: "menu.file.open_file",
        enable: true,
        action: () => {
          api.openFile();
        },
      },
      { type: ItemType.Separator },
      { type: ItemType.Item, name: "menu.file.save", enable, action: () => {} },
      {
        type: ItemType.Item,
        name: "menu.file.save_as_json",
        enable,
        action: () => {},
      },
      { type: ItemType.Separator },
      {
        type: ItemType.SubMenu,
        name: "menu.file.preference",
        enable,
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
      {
        type: ItemType.Item,
        name: "menu.file.close",
        enable,
        action: () => {},
      },
    ],
  };
};
