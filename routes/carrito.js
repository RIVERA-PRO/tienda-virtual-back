import express from 'express';
import carritoCompras from '../controllers/carrito/create.js';
import carritoComprasDelete from '../controllers/carrito/delete.js';
import carritoComprasAllFrom from '../controllers/carrito/allproducts.js';
import passport from '../middlewares/passport.js'
import schema from '../schemas/carrito.js'
import validator from '../middlewares/validator.js'
const router = express.Router();

const { create } = carritoCompras
const { listarProductos } = carritoComprasAllFrom
const { destroy } = carritoComprasDelete
// Ruta para agregar un producto al carrito
router.post('/:id', passport.authenticate('jwt', { session: false }), validator(schema), create);

// Ruta para eliminar un producto del carrito
router.delete('/:id', passport.authenticate('jwt', { session: false }), validator(schema), destroy);

// Ruta para ver todos los productos en el carrito
router.get('/', listarProductos);

export default router;
