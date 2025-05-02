import express from 'express';
import foodController from '~/controllers/foodController';
import foodValidation from '~/validation/foodValidation';

const router = express.Router();

router.post('/createNew', foodValidation.createNew, foodController.createNew)

export default router;