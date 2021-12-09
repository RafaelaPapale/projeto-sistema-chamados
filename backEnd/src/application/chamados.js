const Validation = require('./utils/validationChamados');
const UtilsFunctions = require('./utils/utils');
const Constants = require('./utils/constants');
const ChamadosRepository = require('../port/chamados/chamadosRepo');

const Chamados = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = UtilsFunctions.generateUuid();

            const response = await ChamadosRepository.create(data);
            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async listByUser(data) {
        try {
            const validation = Validation.getByUser(data);
            if (validation) {
                return validation;
            }

            const response = await ChamadosRepository.listByUser(data.userId);
            if (response === null) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async listById(data) {
        try {
            const validation = Validation.getById(data);
            if (validation) {
                return validation;
            }

            const response = await ChamadosRepository.listById(data.id);
            if (response === null) {
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

            const response = await ChamadosRepository.update(data);
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
module.exports = Chamados;