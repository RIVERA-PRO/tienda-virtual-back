import mongoose from 'mongoose';

const compraSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    products: [
        {

            publicacion_id: { type: mongoose.Types.ObjectId, required: true, ref: 'publicacion', },
            title: { type: String, required: true },
            categoria: { type: String, required: true },
            price: { type: Number, required: true },
            cover_photo: { type: String, required: true },


        },
    ],
    idTransaccion: { type: String },
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true },
}, {
    timestamps: true,
});

const Compra = mongoose.model('compras', compraSchema);
export default Compra;
