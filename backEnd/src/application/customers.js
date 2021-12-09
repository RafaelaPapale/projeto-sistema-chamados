const Validation = require('./utils/validationCustomers');
const UtilsFunctions = require('./utils/utils');
const Constants = require('./utils/constants');
const CustomersRepository = require('../port/customers/customersRepo');

const Customers = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = UtilsFunctions.generateUuid();

            const response = await CustomersRepository.create(data);
            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await CustomersRepository.list();
            if (response === null) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Customers;