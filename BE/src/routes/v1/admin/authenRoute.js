import express from 'express';
import authenController from '~/controllers/authenController';

const router = express.Router();

router.post('/login', authenController.login)

export default router;