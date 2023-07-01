import { User } from "../../type/user";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTHINIT = "AUTHINIT";
export const SETERROR = "SETERROR";
export const AUTHINITFAIL = "AUTHINITFAIL";

export interface LoginAction {
  type: typeof LOGIN;
  payload: object; // payload
}

export interface AuthInitAction {
  type: typeof AUTHINIT;
  payload: object; // payload
}

export interface LogOutAction {
  type: typeof LOGOUT;
}

export interface AuthInitFailAction {
  type: typeof AUTHINITFAIL;
}

export interface SetErrorAction {
  type: typeof SETERROR;
  payload: string;
}

export interface LoginState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  isLoaded: boolean;
  isError: boolean;
  message: string;
  user: User | null;
}

export type AuthAction =
  | LoginAction
  | AuthInitAction
  | LogOutAction
  | SetErrorAction
  | AuthInitFailAction;

export function Login(payload: object): LoginAction {
  return { type: LOGIN, payload };
}

export function Logout(): LogOutAction {
  return { type: LOGOUT };
}
export function AuthInit(payload: object): AuthInitAction {
  return { type: AUTHINIT, payload };
}

export function AuthInitFail(): AuthInitFailAction {
  return { type: AUTHINITFAIL };
}

export function SetError(payload: string): SetErrorAction {
  return { type: SETERROR, payload };
}
