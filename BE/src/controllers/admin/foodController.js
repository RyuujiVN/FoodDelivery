const { StatusCodes } = require("http-status-codes")


const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({ message: "Create successfully" })
  } catch (error) {
    next(error)
  }
}

const foodController = {
  createNew
}

export default foodController