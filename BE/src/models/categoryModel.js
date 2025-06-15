import { GET_DB } from "~/configs/databaseConfig"
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from "~/utils/validators"
import { ObjectId } from "mongodb"

const Joi = require("joi")


// Define Collection (Name & Schema)
const CATEGORY_COLLECTION_NAME = "categories"
const CATEGORY_SCHEMA = Joi.object({
  name: Joi.string().required().min(3).max(50).trim().strict(),
  deleted: Joi.boolean().default(false),
  createdAt: Joi.date().timestamp("javascript").default(Date.now()),
  updatedBy: Joi.array().items(
    Joi.object({
      account_id: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
      updatedAt: Joi.date().timestamp("javascript").default(Date.now())
    })
  ).optional().default([]),
  slug: Joi.string().required()
})

const validateBeforeCreate = async (data) => {
  console.log("chạy qua đây!")
  return await CATEGORY_SCHEMA.validateAsync(data, { abortEarly: false })
}

// Create new category
const createNew = async (data) => {
  try {
    const validateData = await validateBeforeCreate(data)

    return await GET_DB().collection(CATEGORY_COLLECTION_NAME).insertOne(validateData)
  } catch (error) {
    throw new Error(error)
  }
}

// Find one category
const findOne = async (id) => {
  try {
    return await GET_DB().collection(CATEGORY_COLLECTION_NAME).findOne({
      _id: new ObjectId(id)
    })
  } catch (error) {
    throw new Error(error)
  }
}

const categoryModel = {
  CATEGORY_COLLECTION_NAME,
  CATEGORY_SCHEMA,
  createNew,
  findOne
}

export default categoryModel;