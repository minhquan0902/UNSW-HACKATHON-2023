import { combineReducers } from "redux";

import settingsReducer from "./settings.reducer";
import themesReducer from "./themes.reducers";
import AuthReducer from "./auth.reducer";
import UsersReducer from "./users.reducer";
import SubjectReducer from "./subjects.reducer";
import GlobalConfigReducer from "./global-configs.reducer";

export default combineReducers({
  settings: settingsReducer,
  theme: themesReducer,
  auth: AuthReducer,
  users: UsersReducer,
  subjects: SubjectReducer,
  globalConfigs: GlobalConfigReducer,
});
