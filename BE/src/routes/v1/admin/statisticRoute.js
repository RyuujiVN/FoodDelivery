import express from 'express';
import statisticController from '~/controllers/statisticController';
import authMiddleware from '~/middlewares/authMiddleware';

const router = express.Router();

router.use(authMiddleware.isAuthorized)

router.get('/', statisticController.createNew)

export default router;