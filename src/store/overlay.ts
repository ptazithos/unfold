import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

const _content = writable<ComponentType | null>(null);

export function show(component) {
  _content.set(component);
}

export function hide() {
  _content.set(null);
}

export { _content as content };
