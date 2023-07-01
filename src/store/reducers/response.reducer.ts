import {
  ResponseState,
  LIST_RESPONSE,
  SET_LOADING,
  HAS_ERROR,
  ResponseAction,
} from "../actions/response.action";

import { Response } from "../../type/response";

const initialState: ResponseState = {
  plans: [],
  isLoading: false,
  error: false,
};

const ResponseReducer = (
  state = initialState,
  action: ResponseAction
): ResponseState => {
  switch (action.type) {
    case SET_LOADING:
      const loadingBoolean: boolean = action.payload;
      return {
        ...state,
        isLoading: loadingBoolean,
      };
    case HAS_ERROR:
      const errorBoolean: boolean = action.payload;
      return {
        ...state,
        error: errorBoolean,
        isLoading: false,
      };

    case LIST_RESPONSE:
      // make sure payload passed here is a list of User
      const listResponseData: Response[] = action.payload;

      return {
        ...state,
        isLoading: false,
        plans: listResponseData,
      };

    // case SEND_REQUEST:
    //   const : User = action.payload;
    //   state.users.unshift(userData);
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };

    default:
      return state;
  }
};

export default ResponseReducer;
