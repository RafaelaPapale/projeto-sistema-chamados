const { v4: uuidv4 } = require('uuid');

const clientId = uuidv4();
const userId = uuidv4();
const id = uuidv4();

const ChamadosObjects = {
    /*==================== CREATE ====================*/
    //Testes Válidos
    CreateChamado_Valid: {
        assunto:'Financeiro',
        complemento: '',
        created: '12/12/2020',
        status: 'Em progresso',
        cliente: 'CDG Hub',
        clientId: clientId,
        userId: userId,
    },

    //Tipo errado de um parâmetro
    CreateChamado_InvalidTypeParam: {
        assunto:'Financeiro',
        complemento: '',
        created: '12/12/2020',
        status: 1,
        cliente: 'CDG Hub',
        clientId: clientId,
        userId: userId,
    },

    /*==================== UPDATE ====================*/
    //Testes Válidos
    UpdateChamado_Valid: {
        id: id,
        assunto:'Financeiro',
        complemento: 'A empresa precisa de dinheiro para comprar um notebook',
        status: 'Em progresso',
        cliente: 'CDG Hub',
        clientId: clientId,
        userId: userId,

    },

    //Tipo errado de um parâmetro
    UpdateChamado_InvalidTypeParam: {
        id: id,
        assunto:'Financeiro',
        complemento: 'A empresa precisa de dinheiro para comprar um notebook',
        status: 1,
        cliente: 'CDG Hub',
        clientId: clientId,
        userId: userId,
    },

    //Not Found
    UpdateChamado_NotFound: {
        id: '987612345',
        assunto:'Financeiro',
        complemento: 'A empresa precisa de dinheiro para comprar um notebook',
        status: 'Em progresso',
        cliente: 'CDG Hub',
        clientId: clientId,
        userId: userId,
    },

    /*==================== GET BY USER ====================*/
    //Testes Válidos
    GetChamadoByUser_Valid: {
        userId: userId,
    },

    //Tipo errado de um parâmetro
    GetChamadoByUser_InvalidTypeParam: {
        userId: 12345,
    },

    //Not Found
    GetChamadoByUser_NotFound: {
        userId: '123456789',
    },

    /*==================== GET BY ID ====================*/
    //Testes Válidos
    GetChamadoById_Valid: {
        id: id,
    },

    //Tipo errado de um parâmetro
    GetChamadoById_InvalidTypeParam: {
        id: 12345,
    },

    //Not Found
    GetChamadoById_NotFound: {
        id: '987654321',
    },
};

module.exports = ChamadosObjects;