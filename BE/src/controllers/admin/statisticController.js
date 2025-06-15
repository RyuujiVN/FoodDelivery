const { StatusCodes } = require("http-status-codes")


const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json(req.jwtDecoded)
  } catch (error) {
    next(error)
  }
}

const statisticController = {
  createNew
}

export default statisticController