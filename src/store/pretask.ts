import { derived, writable } from "svelte/store";

function createPretaskStatus() {
  const store = writable({ api: false, language: false });
  const status = derived(store, ($store) => {
    return Object.values($store).reduce((prev, cur) => {
      return prev && cur;
    }, true);
  });

  return {
    subscribe: status.subscribe,
    doLoad: (key) => {
      store.update((prev) => {
        return { ...prev, ...{ [key]: true } };
      });
    },
  };
}

export const status = createPretaskStatus();
