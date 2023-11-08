import Carrito from "../../models/Carrito.js";

const carritoCompras = {
    listarProductos: async (req, res, next) => {
        let pagination = {
            page: 1,
            limit: 4,
        };

        if (req.query.page) {
            pagination.page = req.query.page;
        }
        if (req.query.quantity) {
            pagination.limit = req.query.quantity;
        }

        try {

            let producs = await Carrito.find({ chapter_id: req.query.publicacion_id }).select('title cover_photo description price categoria user_id publicacion_id createdAt').populate('user_id', 'name photo ')

            if (producs) {
                return res.status(200).json({
                    success: true,
                    producs
                })
            }

        } catch (error) {
            next(error)
        }
    }
};

export default carritoCompras;
