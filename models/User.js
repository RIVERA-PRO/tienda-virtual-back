import mongoose from 'mongoose'

const schema = mongoose.Schema({
    name: { type: String, required: false },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: false },

    rol: { type: String, required: false },
    is_admin: { type: Boolean, required: false },
    is_verified: { type: Boolean, required: false },
    verify_code: { type: String, required: false },
},
    {
        timestamps: true,
    }
)

const User = mongoose.model("users", schema);

export default User;