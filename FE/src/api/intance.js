import axios from "axios"


export const API_ADMIN = axios.create({
  baseURL: "http://localhost:8017/admin/api/v1",
  withCredentials: true,
  timeout: 10 * 60 * 1000
})