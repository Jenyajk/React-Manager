import axios from "axios";
import {baseUrl} from "../app";


const $api = axios.create({
    baseURL: baseUrl
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorixation = `Bearer ${localStorage.getItem("token")}`
    return config
})

export default $api
