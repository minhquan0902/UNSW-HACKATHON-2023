import {
  UserState,
  CREATE_USER,
  LIST_USERS,
  REMOVE_USER,
  UsersAction,
  UPDATE_USERS,
  SET_LOADING,
  HAS_ERROR,
  UPDATE_META,
} from "../actions/user.actions";
import { User } from "../../type/user";
import { Meta } from "../../type/meta";

const initialState: UserState = {
  users: [],
  meta: {
    page: 1,
    page_size: 10,
    total_page: 1,
  },
  isLoading: false,
  error: false,
};

const UsersReducer = (state = initialState, action: UsersAction): UserState => {
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
    case UPDATE_META:
      // make sure payload passed here is a list of User
      const metaData: Meta = action.payload;

      return {
        ...state,
        isLoading: false,
        meta: metaData,
      };
    case LIST_USERS:
      // make sure payload passed here is a list of User
      const listUserData: User[] = action.payload;

      return {
        ...state,
        isLoading: false,
        users: listUserData,
      };

    case CREATE_USER:
      const userData: User = action.payload;
      state.users.unshift(userData);
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_USERS:
      const userDataUpdate: User = action.payload;

      const index = state.users.findIndex((x) => x.id === userDataUpdate.id);
      if (index > -1) {
        state.users[index] = userDataUpdate;
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

    case REMOVE_USER:
      const userId: string = action.payload;

      const indexUser = state.users.findIndex((x) => x.id === userId);
      if (indexUser > -1) {
        state.users.splice(indexUser, 1);
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

export default UsersReducer;
