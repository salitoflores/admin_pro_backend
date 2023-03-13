require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require ('./database/config');

//crea el servidor de express
const app = express();

//configurar cors
app.use( cors() );

// usr salomeflores
// pwd Nikolas01
dbConnection();

//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
});

app.listen( process.env.PORT, () => {
    console.log( 'Servidor corriendo en puerto ' + process.env.PORT )
} );