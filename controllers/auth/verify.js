import User from "../../models/User.js";
import createError from "http-errors";

const controller = {
  verify: async (req, res, next) => {
    try {
      let user = await User.findOne({ verify_code: req.params.verify_code });
      if (!user) {
        return res
          .status(404)
          .json({ message: "Código de verificación inválido" });
      }
      user.is_verified = true;
      await user.save();
      res.status(200).json({ message: "Cuenta verificada exitosamente" });
    } catch (error) {
      return next(createError(400, error));
    }
  },
};

export default controller;
