const Users = require('../../application/users');
const Utils = require('../../application/utils/utils');

const route = '/users';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Users.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.post(`${route}/auth`, async (req, res) => {
        const response = await Users.auth(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Users.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};