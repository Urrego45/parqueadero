import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as parkingController from '../controllers/parking.controller.js';

import { validateSchema } from '../middlewares/validator.js';
import * as parkingSchemas from '../schemas/parking.schema.js';

const router = express.Router()


router.get('/parking', authRequired, parkingController.getParking)
router.post('/parking', authRequired, validateSchema(parkingSchemas.createParkingSchema),  parkingController.createParking)
router.put('/parking/:uuid', authRequired, validateSchema(parkingSchemas.updateParkingSchema),  parkingController.updateParking)
router.delete('/parking/:uuid', authRequired, parkingController.deleteParking)

export default router
