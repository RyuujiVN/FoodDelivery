import { StatusCodes } from "http-status-codes";
import categoryModel from "~/models/categoryModel";
import ApiError from "~/utils/ApiError";
import slug from "slug";

const createNew = async (reqBody) => {
  try {
    const categoryData = {
      name: reqBody.name,
      slug: slug(reqBody.name)
    }
    const res = await categoryModel.createNew(categoryData);
    const category = await categoryModel.findOne(res.insertedId)

    return category
  } catch (error) {
    throw new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message)
  }
}

const categoryService = {
  createNew
}

export default categoryService;
