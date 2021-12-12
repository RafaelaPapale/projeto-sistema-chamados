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

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    CreateChamado_WithoutMandatoryParam: {
        assunto:'Financeiro',
        complemento: '',
        created: '12/12/2020',
        status: 'Em progresso',
        cliente: 'CDG Hub',
        clientId: clientId,
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

    //Parâmetro sem conteúdo
    CreateChamado_EmptyParam: {
        assunto:'Financeiro',
        complemento: '',
        created: '12/12/2020',
        status: 'Em progresso',
        cliente: '',
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

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    UpdateChamado_WithoutMandatoryParam: {
        assunto:'Financeiro',
        complemento: 'A empresa precisa de dinheiro para comprar um notebook',
        status: 'Em progresso',
        cliente: 'CDG Hub',
        clientId: clientId,
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

    //Parâmetro sem conteúdo
    UpdateChamado_EmptyParam: {
        id: id,
        assunto:'Financeiro',
        complemento: 'A empresa precisa de dinheiro para comprar um notebook',
        status: 'Em progresso',
        cliente: '',
        clientId: clientId,
        userId: userId,
    },

    /*==================== GET BY USER ====================*/
    //Testes Válidos
    GetChamadoByUser_Valid: {
        userId: userId,
    },

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    GetChamadoByUser_WithoutMandatoryParam: {
    },

    //Tipo errado de um parâmetro
    GetChamadoByUser_InvalidTypeParam: {
        userId: 12345,
    },

    //Parâmetro sem conteúdo
    GetChamadoByUser_EmptyParam: {
        userId: '',
    },

    /*==================== GET BY ID ====================*/
    //Testes Válidos
    GetChamadoById_Valid: {
        id: id,
    },

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    GetChamadoById_WithoutMandatoryParam: {
    },

    //Tipo errado de um parâmetro
    GetChamadoById_InvalidTypeParam: {
        id: 12345,
    },

    //Parâmetro sem conteúdo
    GetChamadoById_EmptyParam: {
        id: '',
    },
};

module.exports = ChamadosObjects;