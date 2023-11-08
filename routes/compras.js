import express from "express";
import passport from "../middlewares/passport.js";
import compras from '../controllers/mercadoPagoo/compra.js'

let router = express.Router();

const { compra } = compras;

router.post("/", passport.authenticate("jwt", { session: false }), compra);

export default router;