import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import routesLogin from './routes/login.routes.js';
import routesBusiness from './routes/business.routes.js';
import routesParked from './routes/parked.routes.js';
import routesParking from './routes/parking.routes.js';
import routesPrice from './routes/price.routes.js';
import routesSettings from './routes/settingsVehicles.routes.js';
import routesUserParking from './routes/userParking.routes.js';

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
app.use('/api', routesBusiness)
app.use('/api', routesParked)
app.use('/api', routesParking)
app.use('/api', routesPrice)
app.use('/api', routesSettings)
app.use('/api', routesUserParking)

export default app