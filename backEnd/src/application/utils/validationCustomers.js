const validate = require('validate.js');

const Constraints = require('../validation/customers');
const Constants = require('./constants');

const ValidationCustomers = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },
};

module.exports = ValidationCustomers;