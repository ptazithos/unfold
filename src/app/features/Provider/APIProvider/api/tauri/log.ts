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

type LogConfig = {
  location?: string;
};

async function log(level: LogLevel, message: string, config?: LogConfig) {
  const traces = new Error().stack?.split("\n").map((line) => line.split("@"));

  await invoke("plugin:log|log", {
    level,
    message,
    location: config?.location ?? traces[traces.length - 1].join("@"),
  });
}

export async function trace(
  message: string,
  config?: LogConfig
): Promise<void> {
  await log(LogLevel.Trace, message, config);
}

export async function info(message: string, config?: LogConfig): Promise<void> {
  await log(LogLevel.Info, message, config);
}

export async function debug(
  message: string,
  config?: LogConfig
): Promise<void> {
  await log(LogLevel.Debug, message, config);
}

export async function error(
  message: string,
  config?: LogConfig
): Promise<void> {
  await log(LogLevel.Error, message, config);
}
