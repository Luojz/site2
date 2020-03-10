import axios from 'axios'
import { baseURL } from '../config/apis'
import { SECOND } from '../constants/TIME'


const ResponseSchema = {
    data: {},
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
    request: {}
}


// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

const instance = axios.create({
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    baseURL,
    timeout: SECOND * 5,
    withCredentials: true,
    transformRequest(data, headers) {
        // 
        return data
    },
    transformResponse(data) {
        // 
        return data
    },
    // adapter(config) { },
    // auth: {
    //     username: '',
    //     password: ''
    // },
    responseType: 'json',
    responseEncoding: 'utf8',
    validateStatus(status) {
        return status >= 200 && status < 300 // default
    },
    // proxy: {
    //     host: '',
    //     port: 3000,
    //     // auth: {
    //     //     username: '',
    //     //     password: ''
    //     // },
    // }
})


export function $get(url) {
    const options = {
        url,
    }
    return instance(options)
}

export function $post(url, data) {
    const options = {
        method: 'post',
        url,
        data
    }
    return instance(options)
}


export function $put(url, data) {
    const options = {
        method: 'put',
        url,
        data
    }
    return instance(options)
}

export function $delete(url, data) {
    const options = {
        method: 'delete',
        url,
        data
    }
    return instance(options)
}

export function asyncData(apis) {
    const fetch = api => $get(api).then(({ data }) => data)
    return Array.isArray(apis) ? Promise.all(apis.map(fetch)) : fetch(apis)
}