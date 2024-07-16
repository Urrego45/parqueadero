import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'


const router = express.Router()


router.get('/business', authRequired, usersControllers.listUser)

export default router
