import jwt from "jsonwebtoken"

// Generate a token with the payload, secret signature and token life
const generateToken = async (payload, secretSignature, tokenLife) => {
  try {
    return await jwt.sign(payload, secretSignature, { algorithm: "HS256", expiresIn: tokenLife })
  } catch (error) {
    throw new Error(error)
  }
}

// Verify the token with the payload and secret signature
const verifyTonken = async (payload, secretSignature) => {
  try {
    return await jwt.verify(payload, secretSignature);
  } catch (error) {
    throw new Error(error)
  }
}

const JwtProvider = {
  generateToken,
  verifyTonken
}

export default JwtProvider