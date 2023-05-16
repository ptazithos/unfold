import { invoke } from "@tauri-apps/api/tauri";

import { AppStatus, appStore } from "unfold/store/app";
import { ItemType, type RegistryConfig } from "../types";

type FileParams = {
  api: any;
  appStatus: AppStatus;
};

export const fileConfig = (params: FileParams): RegistryConfig => {
  const { api, appStatus } = params;
  const enable = appStatus === AppStatus.LOADED;
  const { cleanExisting, startLoading, completeLoading, failLoading } = appStore;

  return {
    name: "toolbar.file",
    items: [
      {
        type: ItemType.Item,
        name: "menu.file.open_file",
        enable: true,
        action: async () => {
          startLoading();
          const selected = await api.selectFile();
          if (selected) {
            const scenario = JSON.parse(
              await invoke("open_scenario", {
                path: selected,
              })
            );
            completeLoading(scenario);
          } else {
            failLoading();
          }
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
        action: () => {
          cleanExisting()
        },
      },
    ],
  };
};
