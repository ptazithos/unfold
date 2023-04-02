import { writable } from "svelte/store";

interface IMenuConfig {
  show: boolean;
  pos: {
    x: number;
    y: number;
  };
  content: any;
}

const DEFAULT_MENU: IMenuConfig = {
  show: false,
  pos: {
    x: 0,
    y: 0,
  },
  content: null,
};

export const menuConfig = writable(DEFAULT_MENU);
