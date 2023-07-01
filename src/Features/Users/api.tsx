import axiosClient from "../../lib/axios";

const prefixUrl = "v1/users";

const api = {
  /* Login */
  getListUsers: (page: number = 1, limit: number = 10) => {
    return axiosClient.get(`${prefixUrl}`, {
      params: {
        page: page,
        page_size: limit,
      },
    });
  },

  createUsers: (requestBody: any) => {
    return axiosClient.post(`${prefixUrl}`, requestBody);
  },

  getOneUser: (userId: string) => {
    return axiosClient.get(`${prefixUrl}/${userId}`);
  },
  updateUser: (userId: string, requestBody: any) => {
    return axiosClient.put(`${prefixUrl}/${userId}`, requestBody);
  },

  deleteUser: (userId: string) => {
    return axiosClient.delete(`${prefixUrl}/${userId}`);
  },
};

export default api;
