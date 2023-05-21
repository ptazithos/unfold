import { open, save } from "@tauri-apps/api/dialog";
import { mergeContext } from "../utils";
import { invoke } from "@tauri-apps/api";
import { appStore } from "unfold/store/app";

export async function initAPI() {}

export function registerAPI() {
  mergeContext("native_api", {
    openFile: openFile,
    saveFile: saveFile,
  });
}

export async function openFile() {
  const { startLoading, completeLoading, failLoading } = appStore;
  startLoading();

  const selected = (await open({
    multiple: false,
    filters: [{ name: "map", extensions: ["aoe2scenario"] }],
  })) as string | undefined;

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
}

export enum Format {
  AoE2Scenario = 0,
  JSON = 1,
}

export async function saveFile(scenario: any, format: Format) {
  const extension = format === Format.AoE2Scenario ? "aoe2scenario" : "json";

  const selected = (await save({
    filters: [{ name: "map", extensions: [extension] }],
  })) as string | undefined;

  if (selected) {
    await invoke("save_scenario", {
      raw: JSON.stringify(scenario),
      path: selected,
      format,
    });
  }
}
