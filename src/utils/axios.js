import axios from 'axios';

const axiosInst = axios.create();

axios.defaults.baseURL = 'http://localhost:3000';

axiosInst.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInst;
