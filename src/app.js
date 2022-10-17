import express from 'express';
import deviceRoutes from './routes/devices.routes.js';
import modelShoes  from './routes/modelShoes.routes.js';
import modelType  from './routes/modelType.routes.js';
import morgan from 'morgan';

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(deviceRoutes);
app.use(modelShoes);
app.use(modelType);



export default app;