import { StatusCodes } from "http-status-codes";
import categoryService from "~/services/admin/categoryService";


// [POST] /admin/api/v1/category/create
const createNew = async (req, res, next) => {
  try {
    const category = await categoryService.createNew(req.body);

    res.status(StatusCodes.CREATED).json({
      category
    })
  } catch (error) {
    next(error);
  }
}

const categoryController = {
  createNew
}

export default categoryController;
