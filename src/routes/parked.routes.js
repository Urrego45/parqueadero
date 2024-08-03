import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as parkedController from '../controllers/parked.controller.js';

const router = express.Router()


router.get('/parked', authRequired, parkedController.getParked)
router.post('/parked', authRequired, parkedController.createParked)
router.put('/parked/:uuid', authRequired, parkedController.updateParked)
router.delete('/parked/:uuid', authRequired, parkedController.deleteParked)

export default router
