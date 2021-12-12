const { v4: uuidv4 } = require('uuid');

const userId = uuidv4();

const UsersObjects = {
    /*==================== CREATE ====================*/
    //Testes Válidos
    CreateUser_Valid: {
        nome:'Rafaela Papale',
        email: 'rafaela.papale@gec.inatel.br',
        senha: 'projetinhoC214',
    },

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    CreateUser_WithoutMandatoryParam: {
        nome:'Rafaela Papale',
        senha: 'projetinhoC214',
    },

    //Tipo errado de um parâmetro
    CreateUser_InvalidTypeParam: {
        nome:'Rafaela Papale',
        email: 12345,
        senha: 'projetinhoC214',
    },

    //Parâmetro sem conteúdo
    CreateUser_EmptyParam: {
        nome:'Rafaela Papale',
        email: 'rafaela.papale@gec.inatel.br',
        senha: '',
    },

    /*==================== AUTH ====================*/
    //Testes Válidos
    AuthUser_Valid: {
        email: 'rafaela.papale@gec.inatel.br',
        senha: 'projetinhoC214',
    },

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    AuthUser_WithoutMandatoryParam: {
        senha: 'projetinhoC214',
    },

    //Tipo errado de um parâmetro
    AuthUser_InvalidTypeParam: {
        email: 12345,
        senha: 'projetinhoC214',
    },

    //Parâmetro sem conteúdo
    AuthUser_EmptyParam: {
        email: 'rafaela.papale@gec.inatel.br',
        senha: '',
    },

    /*==================== UPDATE ====================*/
    //Testes Válidos
    UpdatehUser_Valid: {
        id: userId,
        nome:'Rafaela Papale',
        email: 'rafaela.papale@gec.inatel.br',
    },

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    UpdateUser_WithoutMandatoryParam: {
        nome:'Rafaela Papale',
        email: 'rafaela.papale@gec.inatel.br',
    },

    //Tipo errado de um parâmetro
    UpdateUser_InvalidTypeParam: {
        id: userId,
        nome:'Rafaela Papale',
        email: 12345,
    },

    //Parâmetro sem conteúdo
    UpdateUser_EmptyParam: {
        id: userId,
        nome:'',
        email: 'rafaela.papale@gec.inatel.br',
    },
};

module.exports = UsersObjects;