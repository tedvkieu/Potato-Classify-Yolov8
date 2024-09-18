import axios from 'axios';
//import nProgress from 'nprogress';
import NProgress from 'nprogress';
import { FaCloudShowersHeavy } from 'react-icons/fa';
import { store } from '../redux/store';

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
});

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        const access_token = store?.getState()?.user?.account?.access_token;
        config.headers['Authorization'] = 'Bearer ' + access_token;
        NProgress.start();
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        NProgress.done();
        console.log('instanceptor: >>>', response);
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response && response.data ? response.data : response;
    },
    function (error) {
        NProgress.done();
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return error && error.response && error.response.data
            ? error.response.data
            : Promise.reject(error);
    }
);
export default instance;
