import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as parkedController from '../controllers/parked.controller.js';

import { validateSchema } from '../middlewares/validator.js';
import * as parkedSchemas from '../schemas/parked.schema.js';

const router = express.Router()


router.get('/parked', authRequired, parkedController.getParked)
router.post('/parked', authRequired, validateSchema(parkedSchemas.createParkedSchema), parkedController.createParked)
router.put('/parked/:uuid', authRequired, validateSchema(parkedSchemas.updateParkedSchema), parkedController.updateParked)
router.delete('/parked/:uuid', authRequired, parkedController.deleteParked)

export default router
