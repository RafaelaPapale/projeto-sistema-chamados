const { CustomersModel } = require('../../infraestructure/database');

const CustomersRepository = {
    async create(data) {
        try {
            const model = new CustomersModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const response = await CustomersModel.find({}).exec();
            return response;
        } catch (e) {
            return e;
        }
    },
};

module.exports = CustomersRepository;