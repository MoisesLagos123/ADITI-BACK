import express from 'express';
import deviceRoutes from './routes/devices.routes.js';
import modelShoes  from './routes/modelShoes.routes.js';

const app = express();

//middlewares
app.use(express.json());
 
app.use(deviceRoutes);
app.use(modelShoes);


export default app;