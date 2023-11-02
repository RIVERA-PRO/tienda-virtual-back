import User from "../../models/User.js";
import Publicacion from "../../models/Publicacion.js";

async function finds_id(req, res, next) {
    const user = await User.findOne({ _id: req.user._id });

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }

    const userId = user._id;

    const existingPublicacion = await Publicacion.findOne({
        title: req.body.title,
        user_id: userId,
    });

    if (existingPublicacion) {
        return res.status(400).json({
            success: false,
            message: "Publicacion with the same title already exists for this user",
        });
    }

    req.body.user_id = userId;

    return next();
}

export default finds_id;
