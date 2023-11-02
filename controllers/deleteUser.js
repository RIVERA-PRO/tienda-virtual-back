import User from '../models/User.js';

const deleteUser = {
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            // Verificar si el usuario existe
            let user = await User.findById(id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Usuario no encontrado',
                });
            }

            // Eliminar el usuario
            await User.findByIdAndDelete(id);

            return res.status(200).json({
                success: true,
                message: 'Usuario eliminado exitosamente',
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
};

export default deleteUser;
