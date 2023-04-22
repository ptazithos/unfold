import persistable from "./utils/persistable";

export enum ThemeName {
  MONOKAI = "monokai",
  DEFAULT = "default",
}

export const theme = persistable("theme", ThemeName.MONOKAI)[0];

const DEFAULT_FONT_SIZE = 16;

function createZoomLevel() {
  const [{ subscribe, set }, level] = persistable("zoomLevel", 100);

  const setREM = (fontSize: string) => {
    const root = document.querySelector<HTMLElement>(":root");
    root.style.fontSize = fontSize;
  };

  const zoom = (percent) => {
    set(percent);
    const calculatedSize = (DEFAULT_FONT_SIZE * percent) / 100;
    setREM(calculatedSize + "px");
  };

  zoom(level);

  return {
    subscribe,
    zoom,
    reset: () => {
      set(100);

      setREM(DEFAULT_FONT_SIZE + "px");
    },
  };
}

export const zoomLevel = createZoomLevel();
