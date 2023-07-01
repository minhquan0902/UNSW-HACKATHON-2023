import axiosClient from "../../lib/axios";

const prefixUrl = "v1/auth";

const api = {
  /* Login */
  login: (email: string, password: string) => {
    return axiosClient.post(`${prefixUrl}/login`, {
      user_name: email,
      password: password,
    });
  },

  checkLoginUser: (page: number = 1, limit: number = 10) => {
    return axiosClient.get(`v1/users`, {
      params: {
        page: page,
        page_size: limit,
      },
    });
  },
};

export default api;
