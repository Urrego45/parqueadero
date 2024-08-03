import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as businessController from '../controllers/business.controller.js';

const router = express.Router()


router.get('/business', authRequired, businessController.getBusinesses)
router.get('/business/:uuid', authRequired, businessController.getBusiness)
router.post('/business', authRequired, businessController.createBusiness)
router.put('/business/:uuid', authRequired, businessController.updateBusiness)
router.delete('/business/:uuid', authRequired, businessController.deleteBusiness)

export default router
