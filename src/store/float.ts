import { writable } from "svelte/store";

export const shown = writable(false);
export const position = writable({ x: 0, y: 0 });
export const component = writable(null);

export function show(pos: { x: number; y: number }, content: any) {
  shown.set(true);
  position.set(pos);
  component.set(content);
}

export function hide() {
  shown.set(false);
  position.set({ x: 0, y: 0 });
  component.set(null);
}
