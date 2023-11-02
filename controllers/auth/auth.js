import User from "../../models/User.js";
import crypto from "crypto";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const controller = {
  sign_up: async (req, res, next) => {


    req.body.rol = '';
    req.body.is_admin = false;
    req.body.is_verified = true;
    req.body.verify_code = crypto.randomBytes(10).toString("hex");
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    try {
      await User.create(req.body);

      return res.status(200).json({
        success: true,
        message: "Usuario registrado",
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  },

  sign_in: async (req, res, next) => {
    try {
      let user = await User.findOneAndUpdate(
        { mail: req.user.mail },
        { is_online: true },
        { new: true }
      );

      user.password = null;

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 7,
      });
      return res.status(200).json({
        succes: true,
        message: "Usuario logueado",
        user,
        token,
      });
    } catch (err) {
      next(err);
    }
  },

  sign_out: async (req, res, next) => {
    const { mail } = req.user;
    const { user } = req;
    try {
      await User.findOneAndUpdate(
        { mail },
        { is_online: false },
        { new: true }
      );
      user.password = null;
      return res.status(200).json({
        success: true,
        message: "Sesion cerrada!",
      });
    } catch (err) {
      next(err);
    }
  },

  token: async (req, res, next) => {
    const { user } = req;

    user.password = null;

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    try {
      return res.status(200).json({
        success: true,
        message: "User logged in",
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
