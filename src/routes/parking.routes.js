import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as parkingController from '../controllers/parking.controller.js';

const router = express.Router()


router.get('/parking', authRequired, parkingController.getParking)
router.post('/parking', authRequired, parkingController.createParking)
router.put('/parking/:uuid', authRequired, parkingController.updateParking)
router.delete('/parking/:uuid', authRequired, parkingController.deleteParking)

export default router
