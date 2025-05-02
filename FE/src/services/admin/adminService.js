import { API_ADMIN } from "~/api/intance";


const login = async (data) => {
  return await API_ADMIN.post("/authen/login", data);
}

const adminService = {
  login
}

export default adminService