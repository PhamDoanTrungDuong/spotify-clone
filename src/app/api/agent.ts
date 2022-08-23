import axios, { AxiosError, AxiosResponse } from "axios";

// this is the type of the response from the server
const responseBody = (response: AxiosResponse) => response.data;

// axios.interceptors.request.use((config: any) => {
//       const token = store.getState().account.user?.token;
//       if(token) config.headers.Authorization = `Bearer ${token}`;
//       return config
//})

//Request Handler
const requests = {
      get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
      post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
      put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
      delete: (url: string) => axios.delete(url).then(responseBody),
  }

const agent = {

}
export default agent;