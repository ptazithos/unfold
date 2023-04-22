import { writable, type Writable } from "svelte/store";

export default function persistable<T>(
  key: string,
  fallback: T,
  deserialize: (item: string) => T = JSON.parse,
  serialize: (value: T) => string = JSON.stringify
) {
  const persistValue = deserialize(localStorage.getItem(key));
  const store = writable<T>(persistValue ?? fallback);

  store.subscribe((value) => {
    localStorage.setItem(key, serialize(value));
  });

  return store;
}
