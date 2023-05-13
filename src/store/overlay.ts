import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

const _content = writable<ComponentType | null>(null);
const _fullScreen = writable<boolean>(true);

export function show(component, fullScreen: boolean) {
  _content.set(component);
  _fullScreen.set(fullScreen);
}

export function hide() {
  _content.set(null);
}

export { _content as content, _fullScreen as fullScreen };
