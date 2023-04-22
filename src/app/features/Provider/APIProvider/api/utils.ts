import { setContext, getContext } from "svelte";

export function mergeContext(key: string, context) {
  const current = getContext<Object>(key);
  setContext(key, { ...current, ...context });
}
