import express from 'express'
import authenRoute from '~/routes/v1/admin/authenRoute.js'
import foodRoute from '~/routes/v1/admin/foodRoute.js'
import statisticRoute from '~/routes/v1/admin/statisticRoute.js'

const router = express.Router()

router.use('/authen', authenRoute)

router.use('/food', foodRoute)

router.use('/statistic', statisticRoute)

export default router