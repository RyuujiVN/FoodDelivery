import joi from "joi"
import { GET_DB } from "~/configs/databaseConfig"
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE, PHONE_RULE, PHONE_RULE_MESSAGE } from "~/utils/validators"

// Define Collection (Name & Schema)
const ADMIN_COLLECTION_NAME = "admins"
const ADMIN_SCHEMA = joi.object({
  email: joi.string().email().required().trim().trim(),
  password: joi.string().required().min(6).max(20).trim().strict(),
  phone: joi.string().optional().pattern(PHONE_RULE).message(PHONE_RULE_MESSAGE).trim().strict(),
  avatar: joi.string().optional(),
  role_id: joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  deleted: joi.boolean().default(false),
  createdAt: joi.date().timestamp("javascript").default(Date.now())
})

const findOne = async (obj) => {
  try {
    const result = await GET_DB().collection(ADMIN_COLLECTION_NAME).findOne({
      ...obj
    })

    return result
  } catch (error) {

  }
}
const adminModel = {
  ADMIN_COLLECTION_NAME,
  ADMIN_SCHEMA,
  findOne
}

export default adminModel