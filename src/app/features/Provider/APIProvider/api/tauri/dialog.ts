import { open } from "@tauri-apps/api/dialog";
import { mergeContext } from "../utils";

export function initAPI() {
  mergeContext("native_api", {
    openFile: openFile,
  });
}

export async function openFile() {
  const selected = await open({
    multiple: false,
  });
  console.log(selected);
}
