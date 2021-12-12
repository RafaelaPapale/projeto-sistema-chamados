const Constants = require('../src/application/utils/constants'); //Constantes de Erro
const Utils = require('../src/application/utils/utils'); //Função de status code no Utils

test('Status Code: 200 - OK', async () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

test('Status Code: 400 - BAD REQUEST', async () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

test('Status Code: 409 - CONFLICT', async () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});

test('Status Code: 404 - NOT FOUND', async () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});

test('Status Code: 500 - INTERNAL SERVER ERROR', async () => {
    const result = Utils.responseStatus(Constants.ErrorMongo.name);
    expect(result).toEqual(500);
});



