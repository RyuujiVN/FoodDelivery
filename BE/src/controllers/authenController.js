const { StatusCodes } = require("http-status-codes")


const login = async (req, res, next) => {
  try {
    res.status(StatusCodes.OK).json({ message: "Login successfully" })
  } catch (error) {
    next(error)
  }
}

const authenController = {
  login
}

export default authenController