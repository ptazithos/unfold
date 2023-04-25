import { writable } from "svelte/store";

export enum AppStatus {
  BEFORE_LOAD = 0,
  LOADING = 1,
  LOADED = 2,
}

const appStatus = writable(AppStatus.BEFORE_LOAD);

export default appStatus;
