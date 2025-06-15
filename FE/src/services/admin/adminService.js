import { API_ADMIN } from "~/api/adminApi";


const login = async (data) => {
  return await API_ADMIN.post("/authen/login", data);
}

const adminService = {
  login
}

export default adminService