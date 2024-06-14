import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import routesLogin from './routes/login.routes.js';

import { config } from 'dotenv';
config()

const app = express()


app.use(cors({
    origin: process.env.ROUTE_CORS,
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())


app.use('/api', routesLogin)

export default app