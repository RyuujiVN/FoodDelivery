import env from "../configs/environment"

const { StatusCodes } = require("http-status-codes")


const errorHandlingMiddleware = (err, req, res, next) => {
  // If miss statusCode, set default to 500
  if (!err.statusCode) {
    err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  }

  const responseError = {
    statusCode: err.statusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: err.stack
  }

  if (!env.BUILD_MODE == 'dev') delete responseError.stack


  res.status(err.statusCode).json(responseError)
}

export default errorHandlingMiddleware