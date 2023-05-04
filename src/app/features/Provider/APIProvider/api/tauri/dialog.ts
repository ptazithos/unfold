import { open } from "@tauri-apps/api/dialog";
import { mergeContext } from "../utils";

export async function initAPI() {}

export function registerAPI() {
  mergeContext("native_api", {
    openFile: openFile,
  });
}

export async function openFile() {
  const selected = await open({
    multiple: false,
    filters: [{ name: "map", extensions: ["aoe2scenario"] }],
  });
  console.log(selected);
}
