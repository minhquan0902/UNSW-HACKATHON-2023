import { createStore, applyMiddleware } from "redux";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import reducers from "./reducers/reducers";
import middlewares from "./middlewares/middlewares";

import { SettingState } from "./actions/settings.actions";
import { ThemeState } from "./actions/themes.actions";

import { updateTheme } from "./middlewares/themes.middleware";

import { persistedState, saveState } from "./persisted.store";

export interface ApplicationState {
  settings: SettingState;
  theme: ThemeState;
}

export default function configureStore() {
  const store = createStore(
    reducers,
    persistedState, // second argument overrides the initial state
    applyMiddleware(...middlewares)
  );

  // add a listener that will be invoked on any state change
  store.subscribe(() => {
    saveState(store.getState());
  });

  // Update the initial theme
  updateTheme(store.getState());

  return store;
}

// export const useSelector: TypedUseSelectorHook<any> = useReduxSelector;

// export const useDispatch = () => useReduxDispatch<any>();

export const useSelector: TypedUseSelectorHook<any> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<any>();
