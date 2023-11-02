import Joi from "joi"

const schema = Joi.object({
    name: Joi.string().min(3).max(20).messages({
        "string.min": "El nombre debe tener al menos 3 caracteres",
        "string.max": "El nombre debe tener un máximo de 20 caracteres",
    }),
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
})

export default schema