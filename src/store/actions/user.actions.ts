import { Meta } from "../../type/meta";
import { User } from "../../type/user";

export interface UserState {
  users: User[];
  meta: Meta;
  isLoading: boolean;
  error: boolean;
}

export const LIST_USERS = "LIST_USERS";

export const CREATE_USER = "CREATE_USER";

export const UPDATE_USERS = "UPDATE_USER";

export const REMOVE_USER = "REMOVE_USER";

export const SET_LOADING = "SET_LOADING";

export const HAS_ERROR = "HAS_ERROR";

export const UPDATE_META = "UPDATE_META";

export interface SetLoadingInterface {
  type: typeof SET_LOADING;
  payload: boolean; // payload
}

export interface UpdateMetaInterface {
  type: typeof UPDATE_META;
  payload: Meta; // payload
}

export interface HasErrorInterface {
  type: typeof HAS_ERROR;
  payload: boolean; // payload
}

export interface ListUserActionInterface {
  type: typeof LIST_USERS;
  payload: any; // payload
}

export interface CreateUserActionInterface {
  type: typeof CREATE_USER;
  payload: User; // payload User objet
}

export interface UpdateUserInterface {
  type: typeof UPDATE_USERS;
  payload: User; // payload User object
}

export interface RemoveUserInterface {
  type: typeof REMOVE_USER;
  payload: string; // payload userId
}

export type UsersAction =
  | CreateUserActionInterface
  | UpdateUserInterface
  | RemoveUserInterface
  | ListUserActionInterface
  | SetLoadingInterface
  | HasErrorInterface
  | UpdateMetaInterface;

export function SetLoading(payload: boolean): SetLoadingInterface {
  return { type: SET_LOADING, payload };
}

export function HasError(payload: boolean): HasErrorInterface {
  return { type: HAS_ERROR, payload };
}

export function ListUser(payload: any): ListUserActionInterface {
  return { type: LIST_USERS, payload };
}

export function UpdateUserMeta(payload: Meta): UpdateMetaInterface {
  return { type: UPDATE_META, payload };
}

export function CreateUser(payload: User): CreateUserActionInterface {
  return { type: CREATE_USER, payload };
}

export function UpdateUser(payload: User): UpdateUserInterface {
  return { type: UPDATE_USERS, payload };
}

export function RemoveUser(payload: string): RemoveUserInterface {
  return { type: REMOVE_USER, payload };
}
