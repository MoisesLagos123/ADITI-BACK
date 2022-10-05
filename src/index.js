import app from './app.js';

import * as dotenv from 'dotenv' 
dotenv.config()


const port = process.env.PORT

app.listen(port);
console.log("aplicacion iniciada en http:localhost/"+port);