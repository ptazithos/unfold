import { invoke } from "@tauri-apps/api/tauri";
import { attachConsole } from "tauri-plugin-log-api";
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

enum LogLevel {
  Trace = 1,
  Debug,
  Info,
  Warn,
  Error,
}

async function log(level: LogLevel, message: string) {
  const traces = new Error().stack?.split("\n").map((line) => line.split("@"));

  const filtered = traces?.filter(([name, location]) => {
    return name.length > 0 && location !== "[native code]";
  });

  await invoke("plugin:log|log", {
    level,
    message,
    location: filtered?.[filtered.length >= 2 ? 2 : 0]
      ?.filter((v) => v.length > 0)
      .join("@"),
  });
}

async function trace(message: string): Promise<void> {
  await log(LogLevel.Trace, message);
}

async function info(message: string): Promise<void> {
  await log(LogLevel.Info, message);
}

async function debug(message: string): Promise<void> {
  await log(LogLevel.Debug, message);
}

async function error(message: string): Promise<void> {
  await log(LogLevel.Error, message);
}
