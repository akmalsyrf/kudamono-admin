import axios from 'axios';
import { KUDAMONO_AUTH_SECRET } from './constant';

axios.defaults.baseURL = 'https://kudamono-admin.vercel.app/api/v1';
axios.interceptors.request.use(function (config) {
    const secret = KUDAMONO_AUTH_SECRET
    config.headers.auth_token =  secret;
     
    return config;
});

export default axios