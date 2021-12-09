const validate = require('validate.js');

const Constraints = require('../validation/users');
const Constants = require('./constants');

const ValidationUsers = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    auth(data) {
        const validation = validate.validate(data, Constraints.auth);
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
};

module.exports = ValidationUsers;