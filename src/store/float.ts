import { writable } from "svelte/store";

export const shown = writable(false);
export const position = writable({ x: 0, y: 0 });
export const component = writable(null);
