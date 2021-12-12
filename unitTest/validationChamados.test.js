const Constants = require('../src/application/utils/constants'); //Constantes de Erro
const ValidationChamados = require('../src/application/utils/validationChamados'); //Função a ser testada unitariamente
const ChamadosObjects = require('./objects/chamados_objects'); //Objetos de teste

describe('CREATE', () => {
    test('Dado válido', async () => {
        const result = ValidationChamados.create(ChamadosObjects.CreateChamado_Valid);
        expect(result).toEqual(undefined);
    });
    
    test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
        const result = ValidationChamados.create(ChamadosObjects.CreateChamado_WithoutMandatoryParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
        const result = ValidationChamados.create(ChamadosObjects.CreateChamado_InvalidTypeParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Parâmetro vazio', async () => {
        const result = ValidationChamados.create(ChamadosObjects.CreateChamado_EmptyParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
});

describe('UPDATE', () => {
    test('Dado válido', async () => {
        const result = ValidationChamados.update(ChamadosObjects.UpdateChamado_Valid);
        expect(result).toEqual(undefined);
    });
    
    test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
        const result = ValidationChamados.update(ChamadosObjects.UpdateChamado_WithoutMandatoryParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
        const result = ValidationChamados.update(ChamadosObjects.UpdateChamado_InvalidTypeParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Parâmetro vazio', async () => {
        const result = ValidationChamados.update(ChamadosObjects.UpdateChamado_EmptyParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
});

describe('GET BY USER-ID', () => {
    test('Dado válido', async () => {
        const result = ValidationChamados.getByUser(ChamadosObjects.GetChamadoByUser_Valid);
        expect(result).toEqual(undefined);
    });
    
    test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
        const result = ValidationChamados.getByUser(ChamadosObjects.GetChamadoByUser_WithoutMandatoryParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
        const result = ValidationChamados.getByUser(ChamadosObjects.GetChamadoByUser_InvalidTypeParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Parâmetro vazio', async () => {
        const result = ValidationChamados.getByUser(ChamadosObjects.GetChamadoByUser_EmptyParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
});

describe('GET BY ID', () => {
    test('Dado válido', async () => {
        const result = ValidationChamados.getById(ChamadosObjects.GetChamadoById_Valid);
        expect(result).toEqual(undefined);
    });
    
    test('Dado Inválido: Sem um parâmetro obrigatório', async () => {
        const result = ValidationChamados.getById(ChamadosObjects.GetChamadoById_WithoutMandatoryParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Passando um tipo errado de um parâmetro', async () => {
        const result = ValidationChamados.getById(ChamadosObjects.GetChamadoById_InvalidTypeParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
    
    test('Dado Inválido: Parâmetro vazio', async () => {
        const result = ValidationChamados.getById(ChamadosObjects.GetChamadoById_EmptyParam);
        expect(result.name).toEqual(Constants.ErrorValidation.name);
    });
});