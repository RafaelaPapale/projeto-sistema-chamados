const Customers = require('../../application/customers');
const Utils = require('../../application/utils/utils');

const route = '/customers';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Customers.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Customers.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};