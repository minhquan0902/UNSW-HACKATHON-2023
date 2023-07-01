import axios from "axios";
import {
  applyAuthTokenInterceptor,
  getAccessToken,
  IAuthTokens,
  TokenRefreshRequest,
} from "axios-jwt";

import wait from "../utils/wait";

/* For RefreshToken Use axios-jwt */

const queryString = require("query-string");
const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Create Axios Instance
 */

const accessToken = getAccessToken();

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",

    authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string
): Promise<IAuthTokens | string> => {
  // const response = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken: refreshToken });

  /* Fake Refresh */
  wait(500);
  const accessToken = getAccessToken();

  return accessToken as IAuthTokens | string;
};

applyAuthTokenInterceptor(axiosClient, {
  requestRefresh,
  header: "Authorization", // header name
  headerPrefix: "Bearer ", // header value prefix
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;

    return response;
  },
  (error) => {
    if (error.name.toLowerCase() === "error") {
    }

    return Promise.reject(error.response?.data);
  }
);

export default axiosClient;
