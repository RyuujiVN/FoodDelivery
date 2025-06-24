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

const validateBeforeSubmit = async (data) => {
  return await CATEGORY_SCHEMA.validateAsync(data, { abortEarly: false })
}

// Get list category
const getList = async (find) => {
  try {
    const categories = await GET_DB().collection(CATEGORY_COLLECTION_NAME).find(find).limit(10).skip(0).toArray()

    return categories
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

// Create new category
const createNew = async (data) => {
  try {
    const validateData = await validateBeforeSubmit(data)

    return await GET_DB().collection(CATEGORY_COLLECTION_NAME).insertOne(validateData)
  } catch (error) {
    throw new Error(error)
  }
}

// Update one category
const updateOne = async (id, data, dataPush) => {
  try {
    return await GET_DB().collection(CATEGORY_COLLECTION_NAME).updateOne({ _id: new ObjectId(id) }, {
      $set: data,
      $push: dataPush
    })
  } catch (error) {
    throw new Error(error)
  }
}

// Delete one category
const deleteOne = async (id) => {
  try {
    return await GET_DB().collection(CATEGORY_COLLECTION_NAME).deleteOne({
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
  findOne,
  getList,
  updateOne,
  deleteOne
}

export default categoryModel;