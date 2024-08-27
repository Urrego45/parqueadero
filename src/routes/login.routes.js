import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as usersControllers from '../controllers/login.controller.js';

import { validateSchema } from '../middlewares/validator.js';
import * as userSchemas from '../schemas/login.schema.js';

const router = express.Router()


router.get('/user', authRequired, usersControllers.listUsers)
router.get('/user/:uuid', authRequired, usersControllers.listUser)

router.put('/user/:uuid', authRequired, validateSchema(userSchemas.updateUser), usersControllers.updateUser)

router.post('/user', authRequired, validateSchema(userSchemas.registerSchema), usersControllers.registerUser)
// router.post('/user', validateSchema(userSchemas.registerSchema), usersControllers.registerUser)

router.get('/verify', usersControllers.verifyToken)
router.get('/logout',  usersControllers.logout)

router.post('/login', validateSchema(userSchemas.loginSchema), usersControllers.login)


export default router
