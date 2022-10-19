import express from 'express';
import morgan from 'morgan';

import deviceRoutes from './routes/devices.routes.js';
import modelShoes  from './routes/modelShoes.routes.js';
import modelType  from './routes/modelType.routes.js';
import user  from './routes/user.routes.js';



const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(deviceRoutes);
app.use(modelShoes);
app.use(modelType);
app.use(user);




export default app;