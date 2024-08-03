import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as priceController from '../controllers/price.controller.js';

const router = express.Router()


router.get('/price', authRequired, priceController.getPrice)
router.get('/price/:uuid', authRequired, priceController.getPrices)
router.post('/price', authRequired, priceController.createPrice)
router.put('/price/:uuid', authRequired, priceController.updatePrice)
router.delete('/price/:uuid', authRequired, priceController.deletePrice)

export default router
