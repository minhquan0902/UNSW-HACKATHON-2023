import { Config } from "../../type/config";

export interface GlobalConfigState {
  configs: Config[];
  isLoading: boolean;
  error: boolean;
}

export const LIST_GLOBAL_CONFIG = "LIST_GLOBAL_CONFIG";
export const CREATE_GLOBAL_CONFIG = "CREATE_GLOBAL_CONFIG";
export const UPDATE_GLOBAL_CONFIG = "UPDATE_GLOBAL_CONFIG";
export const SET_LOADING_CONFIG = "SET_LOADING_CONFIG";
export const HAS_ERROR_CONFIG = "HAS_ERROR_CONFIG";

export interface SetLoadingConfigInterface {
  type: typeof SET_LOADING_CONFIG;
  payload: boolean; // payload
}

export interface HasErrorConfigInterface {
  type: typeof HAS_ERROR_CONFIG;
  payload: boolean; // payload
}

export interface ListConfigsInterface {
  type: typeof LIST_GLOBAL_CONFIG;
  payload: Config[]; // list of Subjects to be shown
}

export interface CreateGlobalConfigInterface {
  type: typeof CREATE_GLOBAL_CONFIG;
  payload: Config; // payload Subject objet
}

export interface UpdateGlobalConfigInterface {
  type: typeof UPDATE_GLOBAL_CONFIG;
  payload: Config; // payload Subject object
}

export type GlobalConfigActions =
  | SetLoadingConfigInterface
  | HasErrorConfigInterface
  | CreateGlobalConfigInterface
  | UpdateGlobalConfigInterface
  | ListConfigsInterface;

export function SetLoadingGlobalConfig(
  payload: boolean
): SetLoadingConfigInterface {
  return { type: SET_LOADING_CONFIG, payload };
}

export function HasErrorGlobalConfig(
  payload: boolean
): HasErrorConfigInterface {
  return { type: HAS_ERROR_CONFIG, payload };
}

export function ListGlobalConfig(payload: any): ListConfigsInterface {
  return { type: LIST_GLOBAL_CONFIG, payload };
}

export function CreateGlobalConfig(
  payload: Config
): CreateGlobalConfigInterface {
  return { type: CREATE_GLOBAL_CONFIG, payload };
}

export function UpdateGlobalConfig(
  payload: Config
): UpdateGlobalConfigInterface {
  return { type: UPDATE_GLOBAL_CONFIG, payload };
}
