import express from 'express';
import deviceRoutes from './routes/devices.routes.js';
import modelShoes  from './routes/modelShoes.routes.js';
import modelType  from './routes/modelType.routes.js';


const app = express();

//middlewares
app.use(express.json());
 
app.use(deviceRoutes);
app.use(modelShoes);
app.use(modelType);



export default app;