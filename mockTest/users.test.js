const Users = require('../src/application/users');
const Constants = require('../src/application/utils/constants');
const UsersRepository = require('../src/port/users/usersRepo');
const UsersObjects = require('./objects/users_objects');

jest.mock('../src/port/users/usersRepo');

describe('CREATE', () => {
    test('Dado válido', async () => {
        const resposta = UsersObjects.CreateUser_Valid;

        UsersRepository.create.mockResolvedValue(resposta);

        const result = await Users.create(UsersObjects.CreateUser_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado duplicado', async () => {
        const resposta = { code: 11000 };

        UsersRepository.create.mockResolvedValue(resposta);

        const result = await Users.create(UsersObjects.CreateUser_Valid);

        expect(result).toEqual(Constants.ErrorDuplicate);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        UsersRepository.create.mockResolvedValue(resposta);

        const result = await Users.create(UsersObjects.CreateUser_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });
});

describe('AUTH', () => {
    test('Dado válido', async () => {
        const resposta = UsersObjects.AuthUser_Valid;

        UsersRepository.auth.mockResolvedValue(resposta);

        const result = await Users.auth(UsersObjects.AuthUser_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado duplicado', async () => {
        const resposta = null;

        UsersRepository.auth.mockResolvedValue(resposta);

        const result = await Users.auth(UsersObjects.AuthUser_NotFound);

        expect(result).toEqual(Constants.ErrorNotFound);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        UsersRepository.auth.mockResolvedValue(resposta);

        const result = await Users.auth(UsersObjects.CreateUser_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });
});

describe('UPDATE', () => {
    test('Dado válido', async () => {
        const resposta = UsersObjects.UpdatehUser_Valid;

        UsersRepository.update.mockResolvedValue(resposta);

        const result = await Users.update(UsersObjects.UpdatehUser_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado duplicado', async () => {
        const resposta = null;

        UsersRepository.update.mockResolvedValue(resposta);

        const result = await Users.update(UsersObjects.UpdateUser_NotFound);

        expect(result).toEqual(Constants.ErrorNotFound);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        UsersRepository.update.mockResolvedValue(resposta);

        const result = await Users.update(UsersObjects.UpdateUser_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });
});
