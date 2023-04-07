import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

interface Position {
  x: number;
  y: number;
}

export const shown = writable(false);
export const position = writable<Position>({ x: 0, y: 0 });
export const component = writable<ComponentType | null>(null);
export const args = writable<any | null>(null);

export function show(pos: Position, content: ComponentType, data?: any) {
  shown.set(true);
  position.set(pos);
  component.set(content);
  args.set(data);
}

export function update(pos: Position, content: ComponentType, data?: any) {
  position.set(pos);
  component.set(content);
  args.set(data);
}

export function hide() {
  shown.set(false);
  position.set({ x: 0, y: 0 });
  component.set(null);
  args.set(null);
}
