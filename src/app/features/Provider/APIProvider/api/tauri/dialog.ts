import { open } from "@tauri-apps/api/dialog";
import { invoke } from "@tauri-apps/api/tauri";
import { info } from "tauri-plugin-log-api";
import { mergeContext } from "../utils";

export async function initAPI() {}

export function registerAPI() {
  mergeContext("native_api", {
    openFile: openFile,
  });
}

export async function openFile() {
  const selected = (await open({
    multiple: false,
    filters: [{ name: "map", extensions: ["aoe2scenario"] }],
  })) as string;
  info(selected);
  invoke("open_scenario", { path: selected }).then((res) => {
    info(JSON.stringify(res));
  });
}
