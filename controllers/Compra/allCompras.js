import Compra from "../../models/Compra.js";

const carritoCompras = {
    listarCompras: async (req, res, next) => {
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

            let compras = await Compra.find({ chapter_id: req.query.publicacion_id }).select('title cover_photo  price categoria user_id publicacion_id status totalAmount idTransaccion products createdAt').populate('user_id', 'name photo mail')

            if (compras) {
                return res.status(200).json({
                    success: true,
                    compras
                })
            }

        } catch (error) {
            next(error)
        }
    }
};

export default carritoCompras;
