import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import User from '../User.js'
import Publicacion from '../Publicacion.js'
import { publicacion } from './publicacion.js'

let newUsers = async (users) => await User.insertMany(users)

let newPublicacion = async (publicaciones) => {
    for (let publicacion of publicaciones) {
        let user = await User.findOne({ mail: publicacion.user_id })
        publicacion.user_id = user._id
        await Publicacion.create(publicacion)
    }
}

let newData = async () => {
    await newUsers(users)
    await newPublicacion(publicacion)
    console.log('done!')
}

newData()
