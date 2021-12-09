const Chamados = require('../../application/chamados');
const Utils = require('../../application/utils/utils');

const route = '/chamados';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Chamados.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/listByUser`, async (req, res) => {
        const response = await Chamados.listByUser(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/listById`, async (req, res) => {
        const response = await Chamados.listById(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Chamados.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};