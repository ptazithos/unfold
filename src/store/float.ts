import type { SvelteComponent } from "svelte";
import { writable } from "svelte/store";

interface Position {
  x: number;
  y: number;
}

export const shown = writable(false);
export const position = writable<Position>({ x: 0, y: 0 });
export const component = writable<typeof SvelteComponent | null>(null);

export function show(pos: Position, content: typeof SvelteComponent) {
  shown.set(true);
  position.set(pos);
  component.set(content);
}

export function update(pos: Position, content: typeof SvelteComponent) {
  position.set(pos);
  component.set(content);
}

export function hide() {
  shown.set(false);
  position.set({ x: 0, y: 0 });
  component.set(null);
}
