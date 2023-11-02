import Joi from 'joi-oid';

const schema = Joi.object({
    photo: Joi
        .string()
        .min(8)
        .uri()
        .messages({
            'string.min': 'La foto debe tener al menos 8 caracteres',
            'string.empty': 'La foto no puede estar vacía',
            'any.required': 'Se requiere una foto',
            'string.uri': 'Se necesita una URL válida'
        }),

    mail: Joi
        .string()
        .min(3)
        .max(100),

    name: Joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.min": "El nombre debe tener al menos 3 caracteres",
            "string.max": "El nombre debe tener como máximo 100 caracteres",
            'string.required': 'El nombre es obligatorio',
        }),

    cover_photo: Joi
        .string()
        .min(0)
        .max(1000),
    cover_photo2: Joi
        .string()
        .min(0)
        .max(1000),
    cover_photo3: Joi
        .string()
        .min(0)
        .max(1000),
    cover_photo4: Joi
        .string()
        .min(0)
        .max(1000),
    description: Joi
        .string()
        .required()
        .min(3)
        .max(1500)
        .messages({
            "string.min": "La descripción debe tener al menos 3 caracteres",
            "string.max": "La descripción debe tener como máximo 1500 caracteres",
            'string.required': 'La descripción es obligatoria',
        }),

    categoria: Joi
        .required()
        .messages({
            "string.min": "La categoría debe tener al menos 20 caracteres",
            "string.max": "La categoría debe tener como máximo 200 caracteres",
            'string.required': 'La categoría es obligatoria',
        }),
    title: Joi
        .string()

        .min(3)
        .max(100)
        .messages({
            "string.min": "El titulo debe tener al menos 3 caracteres",
            "string.max": "El titulo debe tener como máximo 100 caracteres",
            'string.required': 'El titulo es obligatoria',
        }),
    price: Joi
        .required()

        .messages({

            'string.required': 'El precio es obligatorio',
        }),

    user_id: Joi
        .objectId()
        .required(),
});

export default schema;
