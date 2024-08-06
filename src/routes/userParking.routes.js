import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as userParkingController from '../controllers/userParking.controller.js';

import { validateSchema } from '../middlewares/validator.js';
import * as userParkingSchemas from '../schemas/userParking.schema.js';

const router = express.Router()


router.get('/user-parking', authRequired, userParkingController.getUserParking)
router.post('/user-parking', authRequired, validateSchema(userParkingSchemas.createUserParkingSchema), userParkingController.createUserParking)
router.put('/user-parking/:uuid', authRequired, validateSchema(userParkingSchemas.updateUserParkingSchema), userParkingController.updateUserParking)
router.delete('/user-parking/:uuid', authRequired, userParkingController.deleteUserParking)

export default router
