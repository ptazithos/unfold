import { derived, writable } from "svelte/store";

export enum AppStatus {
  BEFORE_LOAD = 0,
  LOADING = 1,
  LOADED = 2,
}

type APPStore = {
  status: AppStatus;
  scenario: any;
};

const APP_DEFAULT_STORE: APPStore = {
  status: AppStatus.BEFORE_LOAD,
  scenario: null,
};

function createAppStore() {
  const { subscribe, set, update } = writable<APPStore>(APP_DEFAULT_STORE);

  const completeLoading = (scenario: any) => {
    set({ status: AppStatus.LOADED, scenario });
  };

  const failLoading = () => {
    set({ status: AppStatus.BEFORE_LOAD, scenario: null });
  };

  const startLoading = () => {
    set({ status: AppStatus.LOADING, scenario: null });
  };

  return {
    subscribe,
    completeLoading,
    failLoading,
    startLoading,
  };
}

export const appStore = createAppStore();
export const appStatus = derived(appStore, ($appStore) => $appStore.status);
export const scenario = derived(appStore, ($appStore) => $appStore.scenario);
