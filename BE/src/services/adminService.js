import { StatusCodes } from "http-status-codes"
import env from "~/configs/environment"
import adminModel from "~/models/adminModel"
import JwtProvider from "~/providers/JwtProvider"
import ApiError from "~/utils/ApiError"


const login = async (reqBody) => {
  const admin = await adminModel.findOne({
    email: reqBody.email
  })

  // Check if the admin doesn't exist or the password is incorrect
  // if (!admin || !bcrypt.compareSync(reqBody.password, admin.password)) {
  //   throw new ApiError(StatusCodes.UNAUTHORIZED, "Email or password is incorrect")
  // }

  if (!admin) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Email or password is incorrect")
  }

  const adminInfo = {
    id: admin._id,
    email: admin.email,
    name: admin.name,
    role: admin.role
  }

  // Generate access token and refresh token
  const accessToken = await JwtProvider.generateToken(
    adminInfo,
    env.ACCESS_TOKEN_SECRET,
    "1h"
    // 5
  )

  const refreshToken = await JwtProvider.generateToken(
    adminInfo,
    env.REFRESH_TOKEN_SECRET,
    "14 days"
    // 15
  )

  return {
    admin: adminInfo,
    accessToken: accessToken,
    refreshToken: refreshToken,
  }
}

const adminService = {
  login
}

export default adminService
