import { Response, Request } from "../../type/response";

export interface ResponseState {
  plans: Response[];
  isLoading: boolean;
  error: boolean;
}

export const LIST_RESPONSE = "LIST_RESPONSE";
export const SEND_REQUEST = "SEND_REQUEST";

export const SET_LOADING = "SET_LOADING";

export const HAS_ERROR = "HAS_ERROR";

export interface SetLoadingInterface {
  type: typeof SET_LOADING;
  payload: boolean; // payload
}
export interface HasErrorInterface {
  type: typeof HAS_ERROR;
  payload: boolean; // payload
}
export interface SendRequestInterface {
  type: typeof SEND_REQUEST;
  payload: Request;
}

export interface ListResponseInterface {
  type: typeof LIST_RESPONSE;
  payload: any; // payload
}

export type ResponseAction =
  | ListResponseInterface
  | SetLoadingInterface
  | HasErrorInterface
  | SendRequestInterface;

export function SetLoading(payload: boolean): SetLoadingInterface {
  return { type: SET_LOADING, payload };
}

export function HasError(payload: boolean): HasErrorInterface {
  return { type: HAS_ERROR, payload };
}

export function ListResponse(payload: any): ListResponseInterface {
  return { type: LIST_RESPONSE, payload };
}

export function SendRequest(payload: Request): SendRequestInterface {
  return { type: SEND_REQUEST, payload };
}
