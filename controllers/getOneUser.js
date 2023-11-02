import User from '../models/User.js'

const getOneUser = {
    get_one: async (req, res) => {
        try {
            let user = await User.find({ _id: req.params.id })
            if(user){
                return res.status(200).json({
                    success: true,
                    user: user
                })
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
};
export default getOneUser;