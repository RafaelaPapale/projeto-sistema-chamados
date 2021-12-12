const Chamados = require('../src/application/chamados');
const Constants = require('../src/application/utils/constants');
const ChamadosRepository = require('../src/port/chamados/chamadosRepo');
const ChamadosObjects = require('./objects/chamados_objects');

jest.mock('../src/port/chamados/chamadosRepo');

describe('CREATE', () => {
    test('Dado válido', async () => {
        const resposta = ChamadosObjects.CreateChamado_Valid;

        ChamadosRepository.create.mockResolvedValue(resposta);

        const result = await Chamados.create(ChamadosObjects.CreateChamado_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        ChamadosRepository.create.mockResolvedValue(resposta);

        const result = await Chamados.create(ChamadosObjects.CreateChamado_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });
});

describe('LIST BY USER', () => {
    test('Dado válido', async () => {
        const resposta = ChamadosObjects.CreateChamado_Valid;

        ChamadosRepository.listByUser.mockResolvedValue(resposta);

        const result = await Chamados.listByUser(ChamadosObjects.GetChamadoByUser_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        ChamadosRepository.listByUser.mockResolvedValue(resposta);

        const result = await Chamados.listByUser(ChamadosObjects.GetChamadoByUser_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });

    test('Dado não encontrado', async () => {
        const resposta = null;

        ChamadosRepository.listByUser.mockResolvedValue(resposta);

        const result = await Chamados.listByUser(ChamadosObjects.GetChamadoByUser_NotFound);

        expect(result).toEqual(Constants.ErrorNotFound);
    });
});

describe('LIST BY ID', () => {
    test('Dado válido', async () => {
        const resposta = ChamadosObjects.CreateChamado_Valid;

        ChamadosRepository.listById.mockResolvedValue(resposta);

        const result = await Chamados.listById(ChamadosObjects.GetChamadoById_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        ChamadosRepository.listById.mockResolvedValue(resposta);

        const result = await Chamados.listById(ChamadosObjects.GetChamadoById_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });

    test('Dado não encontrado', async () => {
        const resposta = null;

        ChamadosRepository.listById.mockResolvedValue(resposta);

        const result = await Chamados.listById(ChamadosObjects.GetChamadoById_NotFound);

        expect(result).toEqual(Constants.ErrorNotFound);
    });
});

describe('UPDATE', () => {
    test('Dado válido', async () => {
        const resposta = ChamadosObjects.UpdateChamado_Valid;

        ChamadosRepository.update.mockResolvedValue(resposta);

        const result = await Chamados.update(ChamadosObjects.UpdateChamado_Valid);

        expect(result).toEqual(resposta);
    });

    test('Dado inválido', async () => {
        const resposta = Constants.ErrorValidation;

        ChamadosRepository.update.mockResolvedValue(resposta);

        const result = await Chamados.update(ChamadosObjects.UpdateChamado_InvalidTypeParam);

        expect(result).toEqual(resposta);
    });

    test('Dado não encontrado', async () => {
        const resposta = null;

        ChamadosRepository.update.mockResolvedValue(resposta);

        const result = await Chamados.update(ChamadosObjects.UpdateChamado_NotFound);

        expect(result).toEqual(Constants.ErrorNotFound);
    });
});
