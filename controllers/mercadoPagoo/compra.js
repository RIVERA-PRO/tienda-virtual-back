import mercadopago from "mercadopago";
import nodemailer from "nodemailer";

mercadopago.configure({ access_token: process.env.PROD_ACCESS_TOKEN });

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
                success: "https://tienda-virtual-jet.vercel.app/compra",
                failure: "",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
        };

        mercadopago.preferences
            .create(preference)
            .then((response) => {
                if (response) {
                    // Email sending code removed
                }
                res.status(200).json({ response });
            })
            .catch((error) => res.status(400).json({ error: error.message }));
    },
};

export default controller;
