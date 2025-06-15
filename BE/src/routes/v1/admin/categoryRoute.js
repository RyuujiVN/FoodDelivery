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

export default router;