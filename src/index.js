import app from './app.js';
import { sequelize } from './database/database.js'
import * as dotenv from 'dotenv' 
import './models/modelShoes.js'
import './models/modelType.js'
import './models/model.js'
import './models/device.js'




if (process.env.NODE_ENV != 'production') {
    dotenv.config()
}

const port = process.env.PORT

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('CONEXION EXITOSA CON LA BASE DE DATOS');
    }catch(error){
        console.log('NO FUE POSIBLE CONECTAR CON LA BASE DE DATOS: ', error);
    }
    try{
        app.listen(port);
        console.log();
        console.log('---------------------------------------------');
        console.log("APLICACION INICIADA EN:  http:localhost/"+port);
        console.log('---------------------------------------------');
    }catch(error){
        console.log('NO FUE POSIBLE INICIAR LA APLICACION: ', error);
    }

}

main();

