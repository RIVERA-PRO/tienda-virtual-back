import Publicacion from "../../models/Publicacion.js";

const destroyP = {
    destroy: async (req, res, next) => {
        try {
            let publicacion = await Publicacion.findOneAndDelete(
                { _id: req.params.id }
            );
            if (publicacion) {
                return res.status(200).json({
                    success: true,
                    message: "Publicacion eliminada",
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Publicacion not found",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default destroyP;
