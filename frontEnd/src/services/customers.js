import client from './config';

const customersPath = '/customers';

const ClientCustomers = {
    async createCustomer(data) {
        try {
            const response = await client.post(`${customersPath}/create`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listCustomers() {
        try {
            const response = await client.get(`${customersPath}/list`);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientCustomers;