import {
  LoginState,
  LOGIN,
  LOGOUT,
  AUTHINIT,
  AuthAction,
  AUTHINITFAIL,
} from "../actions/actions";
import { clearAuthTokens, setAuthTokens } from "axios-jwt";

const initialState: LoginState = {
  isInitialized: true,
  isAuthenticated: false,
  isLoaded: false,
  isError: false,
  message: "",
  user: null,
};

const AuthReducer = (state = initialState, action: AuthAction): LoginState => {
  switch (action.type) {
    case LOGIN:
      const data: any = action.payload;

      setAuthTokens({
        accessToken: data.data.access_token,
        refreshToken: "",
      });

      return {
        ...state,
        isAuthenticated: true,
        user: data.data.user,
      };

    case LOGOUT:
      clearAuthTokens();
      localStorage.clear();

      return {
        ...state,
        isAuthenticated: false,
        isLoaded: false,
        user: null,
      };
    case AUTHINIT:
      const data_user: any = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user: data_user.data.user,
      };
    case AUTHINITFAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
