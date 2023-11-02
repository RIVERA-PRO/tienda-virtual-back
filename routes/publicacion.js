import express from "express";
import publicaciones from "../controllers/publicaciones/create.js";
import oneP from '../controllers/publicaciones/get_one.js'
import destroyP from "../controllers/publicaciones/destroy.js";
import updateP from '../controllers/publicaciones/update.js'
import todos from '../controllers/publicaciones/get_public.js'
import exist_publicacion from '../middlewares/publicaciones/exist_pubicacion.js'
import passport from '../middlewares/passport.js'
import destinoSchemas from '../schemas/publicacion.js'
import validator from '../middlewares/validator.js'

let router = express.Router()
const { create } = publicaciones
const { getOne } = oneP
const { destroy } = destroyP
const { update } = updateP
const { read } = todos

router.post('/', passport.authenticate("jwt", { session: false }), validator(destinoSchemas), create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
