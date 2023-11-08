import Carrito from "../../models/Carrito.js";


const controller = {


    destroy: async (req, res, next) => {
        try {

            let { id } = req.params
            await Carrito.deleteOne(
                { _id: id }
            )
            return res.status(200).json({
                message: 'product delete'
            })

        } catch (error) {
            next(error)
        }
    }
}


export default controller;
