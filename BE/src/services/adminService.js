import adminModel from "~/models/adminModel"


const login = async (reqBody) => {
  const admin = await adminModel.findOne({
    email: reqBody.email
  })

  return admin
}

const adminService = {
  login
}

export default adminService
