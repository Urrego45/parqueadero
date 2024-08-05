import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as userParkingController from '../controllers/userParking.controller.js';

import { validateSchema } from '../middlewares/validator.js';
import * as userParkingSchemas from '../schemas/userParking.schema.js';

const router = express.Router()


router.get('/setting-vehicule', authRequired, userParkingController.getUserParking)
router.post('/setting-vehicule', authRequired, validateSchema(userParkingSchemas.createUserParkingSchema), userParkingController.createUserParking)
router.put('/setting-vehicule/:uuid', authRequired, validateSchema(userParkingSchemas.updateUserParkingSchema), userParkingController.updateUserParking)
router.delete('/setting-vehicule/:uuid', authRequired, userParkingController.deleteUserParking)

export default router
