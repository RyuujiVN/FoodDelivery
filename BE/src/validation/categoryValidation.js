const { StatusCodes } = require("http-status-codes")
const Joi = require("joi")
const { default: ApiError } = require("~/utils/ApiError")


// Validation for create new category
const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    name: Joi.string().required().min(3).max(50).trim().strict(),
  })

  try {
    await correctCondition.validate(req.body, { abortEarly: true })

    next()
  } catch (error) {
    throw new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, json({
      errors: new Error(error).message
    }))
  }
}

const categoryValidation = {
  createNew
}

export default categoryValidation;

