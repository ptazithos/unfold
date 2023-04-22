import persistable from "./utils/persistable";
import { addMessages, locale, init, _ as t } from "svelte-i18n";

import en from "../translation/en.json";
import cn from "../translation/cn.json";

function createLanguage() {
  addMessages("en", en);
  addMessages("cn", cn);

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
