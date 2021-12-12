const Constants = require('../src/application/utils/constants'); //Constantes de Erro
const ValidationCustomers = require('../src/application/utils/validationCustomers'); //Função a ser testada unitariamente
const CustomerObjects = require('./objects/customers_objects'); //Objetos de teste

test('Dado válido', async () => {
    const result = ValidationCustomers.create(CustomerObjects.Customer_Valid);
    expect(result).toEqual(undefined);
});

test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
    const result = ValidationCustomers.create(CustomerObjects.Customer_WithoutMandatoryParam);
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
    const result = ValidationCustomers.create(CustomerObjects.Customer_InvalidTypeParam);
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Dado Inválido: Parâmetro vazio', async () => {
    const result = ValidationCustomers.create(CustomerObjects.Customer_EmptyParam);
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
