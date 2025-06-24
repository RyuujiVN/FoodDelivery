import express from "express";
import categoryController from "~/controllers/admin/categoryController";
import categoryValidation from "~/validation/categoryValidation";

const router = express.Router()

/**
 * @swagger
 * /admin/api/v1/category/create:
 *  post:
 *    tags:
 *      - category
 *    summary: Tạo mới loại
 *    description: Tạo mới loại
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *            required:
 *              - name
 *    responses:
 *      201:
 *        description: Tạo mới loại thành công
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      422:
 *        description: Lỗi dữ liệu đầu vào
 */
router.post('/create', categoryValidation.createNew, categoryController.createNew)

/**
 * @swagger
 * /admin/api/v1/category/list:
 *  get:
 *    tags:
 *      - category
 *    parameters:
 *      - name: keyword
 *        in: query
 *        required: false
 *        schema:
 *          type: string
 *    summary: Lấy danh sách loại được phân trang
 *    description: Lấy danh sách loại được phân trang
 *    responses:
 *      200:
 *        description: Lấy danh sách loại phân trang thành công
 */
router.get('/list', categoryController.getList)

/**
 * @swagger
 * /admin/api/v1/category/edit/{id}:
 *   patch:
 *     tags:
 *       - category
 *     summary: Chỉnh sửa loại
 *     description: Chỉnh sửa loại
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Chỉnh sửa thành công
 */
router.patch('/edit/:id', categoryController.edit)

/**
 * @swagger
 * /admin/api/v1/category/delete/{id}:
 *  delete:
 *    tags:
 *      - category
 *    summary: Xoá loại
 *    description: Xoá loại
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *       200:
 *         description: Xoá thành công
 */
router.delete("/delete/:id", categoryController.deleteCategory)
export default router;