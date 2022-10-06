import express from 'express';
import deviceRoutes from './routes/devices.routes.js';

const app = express();

//middlewares
app.use(express.json());
 
app.use(deviceRoutes);

export default app;