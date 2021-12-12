const Customers = require('../src/application/customers');
const Constants = require('../src/application/utils/constants');
const CustomersRepository = require('../src/port/customers/customersRepo');
const CustomersObjects = require('./objects/customers_objects');

jest.mock('../src/port/customers/customersRepo');

describe('CREATE', () => {
    test('Dado válido', async () => {
        const resposta = CustomersObjects.Customer_Valid;

        CustomersRepository.create.mockResolvedValue(resposta);

        const result = await Customers.create(CustomersObjects.Customer_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado duplicado', async () => {
        const resposta = { code: 11000 };

        CustomersRepository.create.mockResolvedValue(resposta);

        const result = await Customers.create(CustomersObjects.Customer_Valid);

        expect(result).toEqual(Constants.ErrorDuplicate);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        CustomersRepository.create.mockResolvedValue(resposta);

        const result = await Customers.create(CustomersObjects.Customer_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });
});

describe('LIST', () => {
    test('Encontrando dados no banco', async () => {
        const resposta = [ "Customer1", "Customer2", "Customer3" ];

        CustomersRepository.list.mockResolvedValue(resposta);

        const result = await Customers.list();

        expect(result).toEqual(resposta);
    });

    test('Dado inválido', async () => {
        const resposta = null;

        CustomersRepository.list.mockResolvedValue(resposta);

        const result = await Customers.list();

        expect(result).toEqual(Constants.ErrorNotFound);
    });
});