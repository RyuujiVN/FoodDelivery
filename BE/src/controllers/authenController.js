import ms from "ms"
import adminService from "~/services/adminService"
import ApiError from "~/utils/ApiError"

const { StatusCodes } = require("http-status-codes")


const login = async (req, res, next) => {
  try {
    const account = await adminService.login(req.body)

    res.cookie("accessToken", account.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: ms('14 days'),
    })

    res.cookie("refreshToken", account.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: ms('14 days'),
    })

    res.status(StatusCodes.OK).json(account.admin)
  } catch (error) {
    next(error)
  }
}

const authenController = {
  login
}

export default authenController