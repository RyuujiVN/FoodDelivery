import express from 'express'
import authenRoute from './authenRoute.js'
import foodRoute from './foodRoute.js'
import statisticRoute from './statisticRoute.js'
import categoryRoute from './categoryRoute.js'

const router = express.Router()

router.use('/authen', authenRoute)

router.use('/food', foodRoute)

router.use('/statistic', statisticRoute)

router.use('/category', categoryRoute)

export default router