import adminService from "~/services/adminService"

const { StatusCodes } = require("http-status-codes")


const login = async (req, res, next) => {
  try {
    const admin = await adminService.login(req.body)

    if (!admin) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, "Email or password is incorrect")
    }

    res.status(StatusCodes.OK).json(admin)
  } catch (error) {
    next(error)
  }
}

const authenController = {
  login
}

export default authenController