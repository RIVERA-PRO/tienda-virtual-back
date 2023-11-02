import mongoose from 'mongoose'

let schema = new mongoose.Schema(
  {

    user_id: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: false, ref: "user" },
    mail: { type: String, required: false, ref: "user" },
    photo: { type: String, required: false, ref: "user" },
    cover_photo: { type: String, required: true },
    cover_photo2: { type: String, required: false },
    cover_photo3: { type: String, required: false },
    cover_photo4: { type: String, required: false },
    description: { type: String, required: true },
    title: { type: String, required: true },
    categoria: { type: String, required: true },
    price: { type: Number, required: true },

  }, {
  timestamps: true
}

);
let Destino = mongoose.model("publicacion", schema);
export default Destino;


