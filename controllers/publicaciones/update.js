import Publicacion from "../../models/Publicacion.js";

const updateP = {
    update: async (req, res, next) => {
        try {
            const { id } = req.params;

            // Verificar si la publicación existe
            let publicacion = await Publicacion.findById(id);
            if (!publicacion) {
                return res.status(404).json({
                    success: false,
                    message: "Publicacion no encontrada",
                });
            }

            // Actualizar los datos de la publicación si se proporcionan
            const { price, title, description, categoria, cover_photo, cover_photo2, cover_photo3, cover_photo4 } = req.body;

            const updatedFields = {};

            if (title) {
                updatedFields.title = title;
            }
            if (description) {
                updatedFields.description = description;
            }

            if (price) {
                updatedFields.price = price;
            }
            if (cover_photo) {
                updatedFields.cover_photo = cover_photo;
            }
            if (cover_photo2) {
                updatedFields.cover_photo2 = cover_photo2;
            }
            if (cover_photo3) {
                updatedFields.cover_photo3 = cover_photo3;
            }
            if (cover_photo4) {
                updatedFields.cover_photo4 = cover_photo4;
            }
            // Actualizar la publicación
            publicacion = await Publicacion.findByIdAndUpdate(
                id,
                { $set: updatedFields },
                { new: true }
            );

            return res.status(200).json({
                success: true,
                message: "Publicacion actualizada exitosamente",
                publicacion: publicacion,
            });
        } catch (error) {
            next(error);
        }
    },
};

export default updateP;
