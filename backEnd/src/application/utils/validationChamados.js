const validate = require('validate.js');

const Constraints = require('../validation/chamados');
const Constants = require('./constants');

const ValidationChamados = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    update(data) {
        const validation = validate.validate(data, Constraints.update);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    getById(data) {
        const validation = validate.validate(data, Constraints.getById);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    getByUser(data) {
        const validation = validate.validate(data, Constraints.getByUser);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },
};

module.exports = ValidationChamados;