import Compra from "../../models/Compra.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const compras = {
    create: async (req, res, next) => {
        try {
            req.body.user_id = req.user._id;
            const publicacionId = req.query.id || req.body.publicacion_id;
            req.body.publicacion_id = publicacionId;

            let producto = await Compra.create(req.body);

            // Envía el correo electrónico con los detalles de la compra
            const message = {
                from: process.env.SMTP_USER,
                to: req.user.mail,
                subject: "Gracias por tu compra",
                html: `<p>Detalles de tu compra:</p>
                       
                        <p>M° de transacción: ${producto.idTransaccion}</p>
                        <p>Estado de la transacción: ${producto.status}</p>`,
            };

            transporter.sendMail(message, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Correo electrónico enviado: " + info.response);
                }
            });

            res.status(201).json({
                success: true,
                response: {
                    publicacion_id: producto._id,
                    title: producto.title,
                    categoria: producto.categoria,
                    price: producto.price,
                    cover_photo: producto.cover_photo,
                    idTransaccion: producto.idTransaccion,
                    status: producto.status,
                    totalAmount: producto.totalPrice
                },
            });
        } catch (error) {
            next(error);
        }
    },
};

export default compras;
