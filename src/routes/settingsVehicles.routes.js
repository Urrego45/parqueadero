import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as settingsController from '../controllers/settingsVehicle.controller.js';

import { validateSchema } from '../middlewares/validator.js';
import * as settingSchemas from '../schemas/settingsVechicule.schema.js';

const router = express.Router()


router.get('/setting-vehicule', authRequired, settingsController.getSettingVehicle)
router.post('/setting-vehicule', authRequired, validateSchema(settingSchemas.createSettingsSchema) , settingsController.createSettingVehicle)
router.put('/setting-vehicule/:uuid', authRequired, validateSchema(settingSchemas.updateSettingsSchema) , settingsController.updateSettingVehicle)
router.delete('/setting-vehicule/:uuid', authRequired, settingsController.deleteSettingVehicle)

export default router
