import express from 'express';
import authenRoute from '~/routes/v1/admin/authenRoute.js';
import foodRoute from '~/routes/v1/admin/foodRoute.js';

const router = express.Router();

router.use('/authen', authenRoute);

router.use('/food', foodRoute)

export default router;