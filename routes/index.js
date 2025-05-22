//importa el framework express, que permiyte creaar un servidor y manejar rutas
import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasControllers.js';
import { guardarTestimonial } from '../controllers/testimonialesController.js';
//crea una instancia de express
//este enrutador se utilizara para definir todas las rutas del sitio web
const router = express.Router();

//============RUTAS TIPO GET=================

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
//
router.get('/viajes/:slug',paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);

//============RUTAS TIPO POST=================  
/*esta ruta se activa cuando se envia un formulario desde la vista de testimoniales
se usa el metodo post porque se estan enviando datls desde el cliente al servidor
la funcion "guardarTestimonial" se encarga de manejar la logica para guardar el testimonio en la base de datos
*/
router.post('/testimoniales', guardarTestimonial);

//============EXPORTAR=================
export default router;