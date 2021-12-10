import client from './config';

const userPath = '/users';

const ClientUsers = {
    async createUser(data) {
        try {
            const response = await client.post(`${userPath}/create`, data);
            alert(response);
            return response;
        } catch (e) {
            return e;
        }
    },

    async authUser(data) {
        try {
            const response = await client.post(`${userPath}/auth`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async updateUser(data) {
        try {
            const response = await client.put(`${userPath}/update`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientUsers;