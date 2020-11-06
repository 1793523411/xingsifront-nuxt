import axios from 'axios'

const request = axios.create({
    baseURL: 'http://121.36.55.44:8080'
})

//请求拦截器

//响应拦截器

export default request