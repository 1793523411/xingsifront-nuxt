import axios from 'axios'

const request = axios.create({
    baseURL: 'http://101.201.125.229:8081'
})

//请求拦截器

//响应拦截器

export default request