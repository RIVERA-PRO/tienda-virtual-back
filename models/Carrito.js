import mongoose from 'mongoose';

let schema = new mongoose.Schema(
    {
        publicacion_id: { type: mongoose.Types.ObjectId, required: true, ref: 'publicacion', },
        user_id: { type: mongoose.Types.ObjectId, required: true, ref: 'users' },

        description: { type: String, required: true },
        title: { type: String, required: true },
        categoria: { type: String, required: true },
        price: { type: Number, required: true },
        cover_photo: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

let Carrito = mongoose.model("carrito", schema);
export default Carrito;
