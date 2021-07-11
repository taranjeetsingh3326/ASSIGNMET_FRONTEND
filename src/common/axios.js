import axios from 'axios';
import {API_BASE_URL} from '../constant';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.baseURL = API_BASE_URL;
    config.headers = {
        'content-type' : 'application/json',
    }
    if(localStorage.getItem('token')){
        config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  });
  export default axios;