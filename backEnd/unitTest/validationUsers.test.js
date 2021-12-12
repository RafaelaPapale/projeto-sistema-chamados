const Constants = require('../src/application/utils/constants'); //Constantes de Erro
const ValidationUsers = require('../src/application/utils/validationUsers'); //Função a ser testada unitariamente
const UsersObjects = require('./objects/users_objects'); //Objetos de teste

describe('CREATE', () => {
    test('Dado válido', async () => {
        const result = ValidationUsers.create(UsersObjects.CreateUser_Valid);
        expect(result).toEqual(undefined);
    });
    
    test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
        const result = ValidationUsers.create(UsersObjects.CreateUser_WithoutMandatoryParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
        const result = ValidationUsers.create(UsersObjects.CreateUser_InvalidTypeParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Parâmetro vazio', async () => {
        const result = ValidationUsers.create(UsersObjects.CreateUser_EmptyParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
});

describe('AUTH', () => {
    test('Dado válido', async () => {
        const result = ValidationUsers.auth(UsersObjects.AuthUser_Valid);
        expect(result).toEqual(undefined);
    });
    
    test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
        const result = ValidationUsers.auth(UsersObjects.AuthUser_WithoutMandatoryParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
        const result = ValidationUsers.auth(UsersObjects.AuthUser_InvalidTypeParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Parâmetro vazio', async () => {
        const result = ValidationUsers.auth(UsersObjects.AuthUser_EmptyParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
});

describe('UPDATE', () => {
    test('Dado válido', async () => {
        const result = ValidationUsers.update(UsersObjects.UpdatehUser_Valid);
        expect(result).toEqual(undefined);
    });
    
    test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
        const result = ValidationUsers.update(UsersObjects.UpdateUser_WithoutMandatoryParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
        const result = ValidationUsers.update(UsersObjects.UpdateUser_InvalidTypeParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Parâmetro vazio', async () => {
        const result = ValidationUsers.update(UsersObjects.UpdateUser_EmptyParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
});