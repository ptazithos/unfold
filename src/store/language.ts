import persistable from "./utils/persistable";
import { locale, init, _ as t, register } from "svelte-i18n";

function createLanguage() {
  register("en", () => import("../translation/en.json"));
  register("cn", () => import("../translation/cn.json"));

  const [{ subscribe, set }, persistLanguage] = persistable("language", "en");

  init({
    fallbackLocale: "en",
    initialLocale: persistLanguage,
  });

  return {
    subscribe,
    switch: (language: string) => {
      locale.set(language);
      set(language);
    },
  };
}

export const language = createLanguage();
export const _ = t;
