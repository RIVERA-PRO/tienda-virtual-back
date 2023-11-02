import User from '../models/User.js';

const getAllUsers = {
    get_all: async (req, res) => {
        try {
            let users = await User.find();
            if (users.length > 0) {
                return res.status(200).json({
                    success: true,
                    users: users,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "No se encontraron usuarios.",
                });
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
};

export default getAllUsers;
