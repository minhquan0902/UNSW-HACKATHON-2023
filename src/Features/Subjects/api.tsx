import axiosClient from "../../lib/axios";

const prefixUrl = "v1/subjects";

const api = {
  getSubjects: (page: number = 1, limit: number = 10) => {
    return axiosClient.get(`${prefixUrl}`, {
      params: {
        page: page,
        page_size: limit,
      },
    });
  },

  getOneSubject: (subjectId: string) => {
    return axiosClient.get(`${prefixUrl}/${subjectId}`);
  },

  createSubject: (requestBody: any) => {
    return axiosClient.post(`${prefixUrl}`, requestBody);
  },
  updateSubject: (subjectId: string, requestBody: any) => {
    return axiosClient.put(`${prefixUrl}/${subjectId}`, requestBody);
  },

  deleteSubject: (subjectId: string) => {
    return axiosClient.delete(`${prefixUrl}/${subjectId}`);
  },
};

export default api;
