import { derived, writable } from "svelte/store";
import { show, hide } from "./overlay";
import Loading from "unfold/app/components/Loading.svelte";

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
  const { subscribe, set, } = writable<APPStore>(APP_DEFAULT_STORE);

  const cleanExisting = () =>{
    set({ status: AppStatus.BEFORE_LOAD, scenario: null });
  }

  const completeLoading = (scenario: any) => {
    set({ status: AppStatus.LOADED, scenario });
    hide();
  };

  const failLoading = () => {
    cleanExisting()
    hide();
  };

  const startLoading = () => {
    set({ status: AppStatus.LOADING, scenario: null });
    show(Loading);
  };



  return {
    subscribe,
    completeLoading,
    failLoading,
    startLoading,
    cleanExisting
  };
}

export const appStore = createAppStore();
export const appStatus = derived(appStore, ($appStore) => $appStore.status);
export const scenario = derived(appStore, ($appStore) => $appStore.scenario);
