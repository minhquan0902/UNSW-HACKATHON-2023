import {
  LIST_GLOBAL_CONFIG,
  CREATE_GLOBAL_CONFIG,
  UPDATE_GLOBAL_CONFIG,
  SET_LOADING_CONFIG,
  HAS_ERROR_CONFIG,
  GlobalConfigState,
  GlobalConfigActions,
} from "../actions/global-configs.actions";
import { Config } from "../../type/config";

const initialState: GlobalConfigState = {
  configs: [],
  isLoading: false,
  error: false,
};

const GlobalConfigReducer = (
  state = initialState,
  action: GlobalConfigActions
): GlobalConfigState => {
  switch (action.type) {
    case SET_LOADING_CONFIG:
      const loadingBoolean: boolean = action.payload;
      return {
        ...state,
        isLoading: loadingBoolean,
      };
    case HAS_ERROR_CONFIG:
      const errorBoolean: boolean = action.payload;
      return {
        ...state,
        error: errorBoolean,
        isLoading: false,
      };
    case LIST_GLOBAL_CONFIG:
      // make sure payload passed here is a list of Global Configs
      const listGlobalConfigsData: Config[] = action.payload;

      return {
        ...state,
        isLoading: false,
        configs: listGlobalConfigsData,
      };

    case CREATE_GLOBAL_CONFIG:
      const globalConfigData: Config = action.payload;
      state.configs.unshift(globalConfigData);
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_GLOBAL_CONFIG:
      const globalConfigDataUpdate: Config = action.payload;

      const index = state.configs.findIndex(
        (x) => x.id === globalConfigDataUpdate.id
      );
      if (index > -1) {
        state.configs[index] = globalConfigDataUpdate;
        return {
          ...state,

          isLoading: false,
        };
      } else {
        return {
          ...state,
          error: true,
          isLoading: false,
        };
      }

    default:
      return state;
  }
};

export default GlobalConfigReducer;
