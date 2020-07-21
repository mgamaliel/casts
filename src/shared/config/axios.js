import axios from 'axios'

const createAxiosInstance = (headers = {}) => {
    const axiosInstance = axios.create({
        baseURL: process.env.BASE_URL_API,

        headers
    })

    return axiosInstance
}

export default createAxiosInstance
