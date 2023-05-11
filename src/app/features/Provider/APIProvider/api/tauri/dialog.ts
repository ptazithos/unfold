import { open } from "@tauri-apps/api/dialog";
import { mergeContext } from "../utils";


export async function initAPI() {}

export function registerAPI() {
  mergeContext("native_api", {
    selectFile: selectFile,
  });
}

export async function selectFile() {
  const selected = (await open({
    multiple: false,
    filters: [{ name: "map", extensions: ["aoe2scenario"] }],
  })) as string | undefined;

  return selected;
}
