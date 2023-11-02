import Joi from "joi"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'El nombre debe tener al menos 3 caracteres',
                'string.empty': 'El nombre no puede estar vacío',
                'any.required': 'Se requiere un nombre'
            },
        ),
    mail: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2 })
        .messages(
            {
                'string.min': 'El correo debe tener al menos 8 caracteres',
                'string.empty': 'El correo no puede estar vacío',
                'any.required': 'Se requiere un correo',
                'string.email': 'Es necesario un correo válido'
            }
        ),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(50)
        .messages(
            {
                'string.min': 'La contraseña debe tener al menos 8 caracteres',
                'string.max': 'La contraseña no puede exceder los 50 caracteres',
                'string.empty': 'La contraseña no puede estar vacía',
                'any.required': 'Se requiere una contraseña',
            }
        ),
    photo: Joi
        .string()

        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',


                'string.uri': 'Se necesita una URL válida'
            }
        ),


})

export default schema