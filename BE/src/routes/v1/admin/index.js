import express from 'express';
import authenRoute from '~/routes/v1/admin/authenRoute.js';

const router = express.Router();

router.use('/authen', authenRoute);

export default router;