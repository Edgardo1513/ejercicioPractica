//ejercicios
//crear un nuevo proyecto de node
//instalar las dependencias necesarias
//crear tus scripts start, dev
//atender las seguientes peticiones
//una peticion Get en la ruta '/users' y vas a responder con la siguiente info:
/* {
    "id":"6197f7d7c1b2af0dccecdca2",
    "name":"Juan",
    "lastname":"Perez",
}*/
//una peticion del tipo Post en la ruta '/user', en el body enviar la siguiente info:
//id, name, lastname y responder con el status 201 y de la siguiente manera
/*{
    "message":"usuario creado",
    "userInfo":{información del usuario}
}
 */

import express from 'express';
import morgan from 'morgan';

//servidor básico con express
const PORT = 8001;

const app = express();
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

//atender peticiones
app.use(morgan('dev'));
app.use(express.json());

app.get('/users',(req, res) => {
    const { body } = req
    console.log({info: body})
    res.json({info: body})    
});

app.post('/users',(req, res) => {
    const { body } = req
    console.log({messsage: "usuario creado"})
    res.status(201).json({userInfo: body})
    console.log({userInfo: body})
});