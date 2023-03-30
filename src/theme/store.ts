import { writable } from "svelte/store";

export enum ThemeName {
  MONOKAI = "monokai",
  DEFAULT = "default",
}

export const theme = writable(ThemeName.MONOKAI);
