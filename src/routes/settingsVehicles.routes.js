import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as settingsController from '../controllers/settingsVehicle.controller.js';

const router = express.Router()


router.get('/setting-vehicule', authRequired, settingsController.getSettingVehicle)
router.post('/setting-vehicule', authRequired, settingsController.createSettingVehicle)
router.put('/setting-vehicule/:uuid', authRequired, settingsController.updateSettingVehicle)
router.delete('/setting-vehicule/:uuid', authRequired, settingsController.deleteSettingVehicle)

export default router
