import client from './config';

const chamadosPath = '/chamados';

const ClientChamados = {
    async createChamado(data) {
        try {
            const response = await client.post(`${chamadosPath}/create`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listByUser(data) {
        try {
            const response = await client.post(`${chamadosPath}/listByUser`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listById(data) {
        try {
            const response = await client.post(`${chamadosPath}/listById`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async updateChamado(data) {
        try {
            const response = await client.put(`${chamadosPath}/update`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientChamados;