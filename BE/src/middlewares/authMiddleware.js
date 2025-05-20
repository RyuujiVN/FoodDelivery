import { StatusCodes } from "http-status-codes"
import env from "~/configs/environment"
import JwtProvider from "~/providers/JwtProvider"
import ApiError from "~/utils/ApiError"


const isAuthorized = async (req, res, next) => {
  const accessToken = req.cookies.accessToken

  if (!accessToken) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "UNAUTHORIZED! (Token not account)")
  }
  try {
    // Verify token
    const accessTokenDecoded = await JwtProvider.verifyTonken(accessToken, env.ACCESS_TOKEN_SECRET)

    req.jwtDecoded = accessTokenDecoded
    next()
  } catch (error) {
    // If accessToken expired
    if (error?.message?.includes("jwt expired")) {
      throw new ApiError(StatusCodes.GONE, "Need to refresh token!")
    }

    // If accessToken invalid
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZTION! (Please login)" })
  }
}

const authMiddleware = {
  isAuthorized
}

export default authMiddleware