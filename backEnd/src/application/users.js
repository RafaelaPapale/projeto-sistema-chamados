const Validation = require('./utils/validationUsers');
const UtilsFunctions = require('./utils/utils');
const Constants = require('./utils/constants');
const UsersRepository = require('../port/users/usersRepo');

const Users = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = UtilsFunctions.generateUuid();

            const response = await UsersRepository.create(data);
            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async auth(data) {
        try {
            const validation = Validation.auth(data);
            if (validation) {
                return validation;
            }

            const response = await UsersRepository.auth(data.nome, data.senha);
            if(response.length === 0) {
                const result = Constants.ErrorNotFound;
                return result;
            }   
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = Validation.update(data);
            if (validation) {
                return validation;
            }

            const response = await UsersRepository.update(data);
            if(response.length === 0) {
                const result = Constants.ErrorNotFound;
                return result;
            }  
            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Users;