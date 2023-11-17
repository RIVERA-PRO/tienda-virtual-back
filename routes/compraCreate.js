import express from "express";
import passport from "../middlewares/passport.js";

import comprasCreate from '../controllers/Compra/create.js'
import comprasAll from '../controllers/Compra/allCompras.js'
import schema from '../schemas/compra.js'
import validator from '../middlewares/validator.js'
let router = express.Router();


const { create } = comprasCreate;
const { listarCompras } = comprasAll;

router.post("/", passport.authenticate("jwt", { session: false }), validator(schema), create);
router.get('/', listarCompras);
export default router;