import { attachConsole, trace, info, debug, error } from "tauri-plugin-log-api";
import { mergeContext } from "../utils";

export async function initAPI() {
  await attachConsole();
}

export function registerAPI() {
  mergeContext("native_api", {
    trace,
    info,
    debug,
    error,
  });
}
