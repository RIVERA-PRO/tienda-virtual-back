import Joi from "joi-oid"

const schema_comment = Joi.object({

    publicacion_id: Joi.objectId(),
    cover_photo: Joi
        .string()
        .min(0)
        .max(1000),
    description: Joi
        .string()

        .min(3)
        .max(1500)
        .messages({
            "string.min": "La descripción debe tener al menos 3 caracteres",
            "string.max": "La descripción debe tener como máximo 1500 caracteres",
            'string.required': 'La descripción es obligatoria',
        }),

    categoria: Joi
        .string()
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
        .number()
        .messages({

            'string.required': 'El precio es obligatorio',
        }),

})

export default schema_comment