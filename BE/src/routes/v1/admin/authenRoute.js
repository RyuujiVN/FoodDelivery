import express from 'express';
import authenController from '~/controllers/admin/authenController';

const router = express.Router();

/**
 * @swagger
 * /admin/api/v1/authen/login:
 *  post:
 *    tags:
 *      - admin
 *    summary: Đăng nhập
 *    description: Đăng nhập vào hệ thống
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *            required:
 *              - email
 *              - password
 *    responses:
 *      200:
 *        description: Đăng nhập thành công
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *      422:
 *        description: Lỗi dữ liệu đầu vào
 */

router.post('/login', authenController.login)

export default router;