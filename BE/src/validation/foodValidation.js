import joi from "joi";
import { StatusCodes } from "http-status-codes";
import { json } from "body-parser";

// Validation for create new food
const createNew = async (req, res, next) => {
  const correctCondition = joi.object({
    name: joi.string().required().min(3).max(50),
    description: joi.string().required().min(10).max(250),
    price: joi.number().required().min(0),
    image: joi.string().required(),
    category_id: joi.string().required(),
    status: joi.string().valid("active", "inactive").default("active"),
  })



  try {
    await correctCondition.validate(req.body, { abortEarly: false })

    next()
  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY, json({
      errors: new Error(error).message
    }))
  }
}

const foodValidation = {
  createNew
}

export default foodValidation