const { UsersModel } = require('../../infraestructure/database');

const UsersRepository = {
    async create(data) {
        try {
            const model = new UsersModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            const options = { new: true };
            const filter = { id: data.id, email: data.email };
            const result = await UsersModel.findOneAndUpdate(filter, update, options).exec();
            if(result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async auth(email, senha) {
        try {
            const response = await UsersModel.findOne({ email, senha });
            return response.toObject();
        } catch (e) {
            return e;
        }
    },
};

module.exports = UsersRepository;