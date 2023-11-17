import Joi from "joi-oid";

const schema_comment = Joi.object({
    // ... (otros campos)

    products: Joi.array().items(
        Joi.object({
            publicacion_id: Joi.objectId(),
            title: Joi.string().min(3).max(100).required(),
            price: Joi.number().required(),
            categoria: Joi.string().min(3).max(200),
            cover_photo: Joi.string().min(0).max(1000),

            idTransaccion: Joi.string().min(3).max(1500),  // Si description es un campo permitido

        })
    ),

    status: Joi.string().min(3).max(200).required(),  // Ajusta los límites según tus necesidades
    totalAmount: Joi.number().required(),  // Puedes ajustar los límites según tus necesidades
    idTransaccion: Joi.string().min(3).max(1500),  // Ajusta los límites según tus necesidades
});

export default schema_comment;
