import { writable } from "svelte/store";

export enum ThemeName {
  MONOKAI = "monokai",
  DEFAULT = "default",
}

export const theme = writable(ThemeName.MONOKAI);

const DEFAULT_FONT_SIZE = 16;

function createZoomLevel() {
  const { subscribe, set } = writable(100);
  const setREM = (fontSize: string) => {
    const root = document.querySelector<HTMLElement>(":root");
    root.style.fontSize = fontSize;
  };

  return {
    subscribe,
    zoom: (percent) => {
      const calculatedSize = (DEFAULT_FONT_SIZE * percent) / 100;
      set(percent);

      setREM(calculatedSize + "px");
    },
    reset: () => {
      set(100);

      setREM(DEFAULT_FONT_SIZE + "px");
    },
  };
}

export const zoomLevel = createZoomLevel();
