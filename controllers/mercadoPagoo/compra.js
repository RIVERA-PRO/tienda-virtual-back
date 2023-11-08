import mercadopago from "mercadopago";
import nodemailer from "nodemailer";

mercadopago.configure({ access_token: process.env.PROD_ACCESS_TOKEN });

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

const controller = {
    compra: (req, res) => {
        let products = req.body.products;
        const totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        let preference = {
            items: products.map((product) => ({
                id: product.id,
                title: product.title,
                currency_id: "ARS",
                unit_price: product.price,
                quantity: 1,
            })),

            payer: {
                name: req.user.name,
            },
            back_urls: {
                success: "https://tienda-virtual-jet.vercel.app/",
                failure: "",
                pending: "",
                notification: "http://localhost:8080/mercadopago/notification",
            },
            auto_return: "approved",
            binary_mode: true,
        };

        mercadopago.preferences
            .create(preference)
            .then((response) => {
                if (response) {
                    // Envía el correo electrónico con los detalles de la compra
                    const message = {
                        from: process.env.SMTP_USER,
                        to: req.user.mail,
                        subject: "Gracias por comprar en Libre Moda Deportiva, aquí están los detalles de tu pedido",
                        html: `<div style="text-align:center;">
                        <img style="width: 100%;" src="https://tienda-virtual-jet.vercel.app/static/media/zapatillas.57e14d38677f38b0d6a4.png" alt="foto" />
                        <h3 style="font-size:20px; text-align:center">¡Gracias por tu compra, ${req.user.name}!</h3>
                        <p style="font-size:16px; text-align:center">Aquí tienes los detalles de tu pedido:</p>
                        <div>
                            <div>
                                ${products.map((product) => `<p>${product.title}: ${product.type}: $${product.price} : cantidad: 1</p>`).join('')}
                            </div>
                        </div>
                        <p style="font-size:14px; text-align:center;">Precio total: $${totalPrice}</p>
                        <p>Apreciamos tu negocio y esperamos que disfrutes de tu compra.</p>
                    </div>`
                    };

                    transporter.sendMail(message, (error, info) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log("Correo electrónico enviado: " + info.response);
                        }
                    });
                }
                res.status(200).json({ response });
            })
            .catch((error) => res.status(400).json({ error: error.message }));
    },
};

export default controller;
