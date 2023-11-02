import mongoose from "mongoose";

mongoose.set('strictQuery', false)
console.log(process.env.MONGO)
mongoose.connect(process.env.MONGO)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))