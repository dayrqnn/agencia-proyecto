//importar el modulo express, que es un framework para construir aplicaciones web en Node.js
import express from 'express';
//llamamos el archivo que se encuentra en la carpeta de rutas
import router from './routes/index.js';
import db from './config/db.js';

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => console.log(error));

const app = express();
//crea una instancia de una aplicación de express
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));

//==Agregar router
app.use('/', router);

app.use(express.static('public'));

//define el puerto en el que la aplicación escuchará las solicitudes
//usa el valor definido en la variable de entorno PORT
// o el puerto 3000 si no está definida (puerto por defecto)
app.listen(port, () => {
    console.log(`el Servidor esta funcionando en http://localhost:${port}`);
});
//habilitar pug
app.set('view engine', 'pug');

//obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
   // los local
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio= "Agencia de Viajes";
    //si no cambia el middleware lo obligamos a cambiar de middleware
    next(); //si en el servidor llega a haber error mandar un -->>return next();
});

//ruta raiz
app.get('/', (req, res) => {
    res.send('Bienvenido a la pagina principal');
});














