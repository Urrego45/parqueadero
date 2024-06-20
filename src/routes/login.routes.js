import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'

import * as usersControllers from '../controllers/login.controller.js';

import { validateSchema } from '../middlewares/validator.js';
import * as userSchemas from '../schemas/login.schema.js';

const router = express.Router()


router.get('/usuarios', authRequired, usersControllers.listUser)
router.put('/usuarios/:uuid', authRequired, validateSchema(userSchemas.updateUser), usersControllers.updateUser)

router.post('/usuarios', authRequired, validateSchema(userSchemas.registerSchema), usersControllers.registerUser)

router.get('/verify', usersControllers.verifyToken)
router.get('/logout',  usersControllers.logout)

router.post('/login', validateSchema(userSchemas.loginSchema), usersControllers.login)



// router.post('/login', )
// router.post('/register', )


export default router

