const { ChamadosModel } = require('../../infraestructure/database');

const UsersRepository = {
    async create(data) {
        try {
            const model = new ChamadosModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                assunto: data.assunto,
                cliente: data.cliente,
                clientId: data.clientId,
                userId: data.userId,
                complemento: data.complemento,
                created: data.created,
                status: data.status,
            };
            const options = { new: true };
            const filter = { id: data.id };
            const result = await ChamadosModel.findOneAndUpdate(filter, update, options).exec();
            if(result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(id) {
        try {
            const response = await ChamadosModel.deleteOne({ id }).exec();
            return response.deletedCount;
        } catch (e) {
            return e;
        }
    },

    async listByUser(userId) {
        try {
            const response = await ChamadosModel.find({ userId });
            return response;
        } catch (e) {
            return e;
        }
    },

    async listById(id) {
        try {
            const response = await ChamadosModel.findOne({ id }).exec();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },
};

module.exports = UsersRepository;