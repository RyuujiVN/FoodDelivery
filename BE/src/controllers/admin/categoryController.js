import { StatusCodes } from "http-status-codes";
import categoryService from "~/services/admin/categoryService";

// [GET] /admin/api/v1/category/list
const getList = async (req, res, next) => {
  try {
    const categories = await categoryService.getList(req)

    res.status(StatusCodes.OK).json(categories)

  } catch (error) {
    next(error)
  }
}

// [POST] /admin/api/v1/category/create
const createNew = async (req, res, next) => {
  try {
    const category = await categoryService.createNew(req.body);

    res.status(StatusCodes.CREATED).json(category)
  } catch (error) {
    next(error);
  }
}

// [PATCH] /admin/api/v1/category/edit/:id
const edit = async (req, res, next) => {
  try {
    const category = await categoryService.edit(req)

    res.status(StatusCodes.OK).json(category)
  } catch (error) {
    next(error)
  }
}

// [DELETE] /admin/api/v1/category/delete/:id
const deleteCategory = async (req, res, next) => {
  try {
    await categoryService.deleteCategory(req)

    res.status(StatusCodes.OK).json({
      message: "Xoá thành công!"
    })
  } catch (error) {
    next(error)
  }
}

const categoryController = {
  createNew,
  getList,
  edit,
  deleteCategory
}

export default categoryController;
