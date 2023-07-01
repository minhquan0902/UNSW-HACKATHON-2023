import { combineReducers } from "redux";

import settingsReducer from "./settings.reducer";
import themesReducer from "./themes.reducers";
import ResponseReducer from "./response.reducer";
import GlobalConfigReducer from "./global-configs.reducer";

export default combineReducers({
  settings: settingsReducer,
  theme: themesReducer,

  plans: ResponseReducer,
  globalConfigs: GlobalConfigReducer,
});
