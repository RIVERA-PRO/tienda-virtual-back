import Publicacion from '../../models/Publicacion.js';

const onePub = {
    getOne: async (req, res, next) => {
        try {
            const publicacion = await Publicacion.findOne({ _id: req.params.id });

            if (publicacion) {
                return res.status(200).json({
                    publicacion: publicacion
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "Publicacion no existe",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default onePub;
