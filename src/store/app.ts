import { writable } from "svelte/store";

export enum AppStatus {
  BEFORE_LOAD = 0,
  LOADING = 1,
  LOADED = 2,
}

export const appStatus = writable(AppStatus.BEFORE_LOAD);
export const scenarios = writable({});
