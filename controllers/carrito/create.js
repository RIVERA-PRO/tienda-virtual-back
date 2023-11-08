import Carrito from "../../models/Carrito.js";

const carritoCompras = {
    create: async (req, res, next) => {
        try {
            req.body.user_id = req.user._id;
            const publicacionId = req.query.id || req.body.publicacion_id;
            req.body.publicacion_id = publicacionId;

            let producto = await Carrito.create(req.body);

            res.status(201).json({
                success: true,
                response: {
                    _id: producto._id,
                    title: producto.title, description: producto.description, categoria: producto.categoria, price: producto.price, cover_photo: producto.cover_photo, _id: producto._id

                },
            });
        } catch (error) {
            next(error);
        }
    },
};

export default carritoCompras;
