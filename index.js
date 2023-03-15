
const express = require('express');

const cors = require('cors');
require('dotenv').config();

const { dbConnection } = require('./database/config');

//  Crear servidor express();
const app = express();

// configuracion de cors
app.use(cors());

//Base de datos
dbConnection();



// Rutas

app.get( '/',( req, res ) => {

    res.json({
        ok:true,
        msg:'Hola Mundo'
    });
});

app.listen(process.env.PORT, ( ) =>{
    console.log ('Servidor corriendo puerto ' + process.env.PORT);
});NPM 