import { writable } from "svelte/store";

interface IFloatContent {
  show: boolean;
  pos: {
    x: number;
    y: number;
  };
  content: any;
}

const DEFAULT_FLOAT_CONTENT: IFloatContent = {
  show: false,
  pos: {
    x: 0,
    y: 0,
  },
  content: null,
};

export const menuConfig = writable(DEFAULT_FLOAT_CONTENT);
