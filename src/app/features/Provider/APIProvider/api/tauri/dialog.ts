import { open } from "@tauri-apps/api/dialog";
import { invoke } from "@tauri-apps/api/tauri";
import { info } from "./log";
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
  })) as string | undefined;

  if (!!selected) {
    info(`file: ${selected} is selected, loading...`);
    invoke("open_scenario", { path: selected }).then((res: string) => {
      info(`file: ${selected} is selected, loaded`);
      const scenario = JSON.parse(res);
    });
  } else {
    info(`file is invalid`);
  }
}
