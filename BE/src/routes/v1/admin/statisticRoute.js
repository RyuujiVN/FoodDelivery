import express from 'express';
import statisticController from '../../../controllers/admin/statisticController.js';
import authMiddleware from '../../../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware.isAuthorized)

router.get('/', statisticController.createNew)

export default router;