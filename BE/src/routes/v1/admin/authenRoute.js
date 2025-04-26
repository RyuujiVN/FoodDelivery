import express from 'express';
import authenController from '~/controllers/authen.controller';

const router = express.Router();

router.post('/login', authenController.login)

export default router;