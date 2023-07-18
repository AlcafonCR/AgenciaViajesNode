import express from 'express';
import { paginaInicio, paginaNosotros, paginaTestimonios, paginaViajes, paginaDetalleViaje } from '../controllers/paginasController.js'
import { guardarTestimonial } from '../controllers/testimoniosController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimonios', paginaTestimonios);
router.post('/testimonios', guardarTestimonial)

export default router;