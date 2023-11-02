import Publicacion from '../../models/Publicacion.js';

const todos = {
    read: async (req, res, next) => {
        try {
            let order = { title: 1 };
            if (req.query.order == 1 || req.query.order == -1) {
                order.title = req.query.order;
            }

            let pagination = { page: 1, limit: 0 };
            if (req.query.page) {
                pagination.page = Number(req.query.page);
            }

            let skip = pagination.page > 1 ? (pagination.page - 1) * pagination.limit : 0;

            let query = {};
            if (req.query.title) {
                query.title = new RegExp(req.query.title.trim(), 'i');
                pagination.limit = 10;
                skip = 0;
            }
            if (req.query.category) {
                query.category_id = req.query.category.split(',');
                pagination.limit = 10;
            }

            let publicaciones = await Publicacion.find(query)
                .select("-updatedAt -__v")
                .sort(order)
                .skip(skip)
                .limit(pagination.limit > 0 ? pagination.limit : 0);

            if (publicaciones.length) {
                return res.status(200).json({
                    success: true,
                    publicaciones,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'No publicaciones ',
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default todos;
