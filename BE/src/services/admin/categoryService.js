import { StatusCodes } from "http-status-codes";
import categoryModel from "~/models/categoryModel";
import ApiError from "~/utils/ApiError";
import slug from "slug";
import searchHelper from "~/helpers/searchHelper";

const getList = async (req) => {
  try {
    const find = {
      deleted: false,
    }

    // Search
    const search = searchHelper(req.query)
    if (search.regex) {
      find.name = search.regex
    }

    const categories = await categoryModel.getList(find)

    return categories
  } catch (error) {
    throw new Error(error)
  }
}

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
    throw new Error(error)
  }
}

const edit = async (req) => {
  try {
    const id = req.params?.id;
    const data = {
      name: req.body.name,
      slug: slug(req.body.name)
    }
    const dataPush = {
      updatedBy: {
        admin_id: "sadfsdf",
        updatedAt: Date.now()
      }
    }
    await categoryModel.updateOne(id, data, dataPush)
    const updatedCategory = await categoryModel.findOne(id)

    return updatedCategory
  } catch (error) {
    throw new Error(error)
  }
}

const deleteCategory = async (req) => {
  try {
    const id = req.params?.id
    const res = await categoryModel.deleteOne(id)
    if (res.deletedCount == 0) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy loại bạn muốn xoá!")
    }

  } catch (error) {
    throw new Error(error)
  }
}

const categoryService = {
  createNew,
  getList,
  edit,
  deleteCategory
}

export default categoryService;
