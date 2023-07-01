import { ApplicationState } from "./store";
import { updateClasses } from "./middlewares/settings.middleware";
import { updateTheme } from "./middlewares/themes.middleware";

const STORAGE_KEY = "ANS-store-key";

/**
 * Use this function if you need to call a middleware
 * when setting the initial state.
 */
const callMiddlewares = (state: ApplicationState) => {
  // Since a middlwrare is requried to modify the DOM in this case
  // for settings and themes, is necessary to call middleware
  // directly to set the initial state loaded from storage
  updateClasses(state);
  updateTheme(state);
};

/* Use an IIFE to export the persisted state in a variable */
export const persistedState = (() => {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (rawState === null) return undefined;
    const state = JSON.parse(rawState);
    callMiddlewares(state);
    return state;
  } catch (err) {
    return undefined;
  }
})();

/* Export a method to save state on each store update */
export const saveState = (state: ApplicationState) => {
  try {
    let stateFilter = JSON.parse(JSON.stringify(state)); // deep clone
    ["offsidebarOpen", "asideToggled", "horizontal"] // states which we don't want to persist.
      .forEach((item) => delete stateFilter.settings[item]);
    const rawState = JSON.stringify(stateFilter);
    localStorage.setItem(STORAGE_KEY, rawState);
  } catch (err) {
    // Ignore write errors.
  }
};
