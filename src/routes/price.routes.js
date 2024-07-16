import express from 'express';

import { authRequired } from '../middlewares/validateToken.js'


const router = express.Router()


router.get('/price', authRequired, )


export default router

