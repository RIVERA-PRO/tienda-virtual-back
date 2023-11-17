import userRouter from './users.js'
import publicacion from './publicacion.js'
import carrito from './carrito.js'
import express from 'express'
import compras from './compras.js'
import comprasCreate from './compraCreate.js'
let router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/publicacion', publicacion)
router.use('/carrito', carrito)
router.use('/buy', compras)
router.use('/compra', comprasCreate)
export default router