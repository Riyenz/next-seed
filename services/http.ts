import { JWT_KEY } from '@/constants/keys.const'
import axios from 'axios'

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> { }
}

const http = (baseURL: string, options = {}) => {
  const token = process.browser ? localStorage.getItem(JWT_KEY) : undefined

  const defaultOptions = {
    baseURL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  }

  const opts = Object.assign({}, defaultOptions, options)

  let http = axios.create(opts)

  http.interceptors.response.use(
    (response) => response.data,
    (err) => {
      if (err.response.status === 400) {
        //Bad Request
      }
      if (err.response.status === 401) {
        //Unauthorized
      }
      throw err.response.data
    }
  )

  return http
}

export default http
