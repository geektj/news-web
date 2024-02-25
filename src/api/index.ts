import axios, { AxiosInstance } from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = process.env.REACT_APP_API_BASE_URL;

const apiInstance: AxiosInstance = axios.create({
    baseURL,
    params: {
        apiKey
    },
    // headers: {
    //   'Content-Type': 'application/json',
    // },
})

// Add a request interceptor
apiInstance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
apiInstance.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default apiInstance;