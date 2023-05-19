import { open, save } from "@tauri-apps/api/dialog";
import { mergeContext } from "../utils";


export async function initAPI() {}

export function registerAPI() {
  mergeContext("native_api", {
    openFile: openFile,
    saveFile: saveFile
  });
}

export async function openFile() {
  const selected = (await open({
    multiple: false,
    filters: [{ name: "map", extensions: ["aoe2scenario"] }],
  })) as string | undefined;

  return selected;
}

export async function saveFile(){
  const selected = await save({
    filters: [{ name: "map", extensions: ["aoe2scenario"] }]
  }) as string|undefined
  return selected;
}
