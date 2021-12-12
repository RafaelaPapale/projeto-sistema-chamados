const { v4: uuidv4 } = require('uuid');

const userId = uuidv4();

const UsersObjects = {
    /*==================== CREATE ====================*/
    //Testes Válidos
    CreateUser_Valid: {
        nome:'Douglas Tavares',
        email: 'douglasmartins@gec.inatel.br',
        senha: 'projetinhoC214lab',
    },

    /* Testes Inválidos */
    //Tipo errado de um parâmetro
    CreateUser_InvalidTypeParam: {
        nome:'Douglas Tavares',
        email: 67890,
        senha: 'projetinhoC214lab',
    },

    /*==================== AUTH ====================*/
    //Testes Válidos
    AuthUser_Valid: {
        email: 'douglasmartins@gec.inatel.br',
        senha: 'projetinhoC214lab',
    },

    /* Testes Inválidos */
    //Tipo errado de um parâmetro
    AuthUser_InvalidTypeParam: {
        email: 12345,
        senha: 'projetinhoC214lab',
    },

    //Not Found
    AuthUser_NotFound: {
        email: 'douglas.martins@gec.inatel.br',
        senha: 'projetinhoC214lab',
    },

    /*==================== UPDATE ====================*/
    //Testes Válidos
    UpdatehUser_Valid: {
        id: userId,
        nome:'Douglas Tavares Martins',
        email: 'douglasmartins@gec.inatel.br',
    },

    /* Testes Inválidos */
    //Tipo errado de um parâmetro
    UpdateUser_InvalidTypeParam: {
        id: userId,
        nome:'Douglas Tavares Martins',
        email: 67890,
    },

    //Not Found
    UpdateUser_NotFound: {
        id: "67890",
        nome:'Douglas Tavares Martins',
        email: 'douglasmartins@gec.inatel.br',
    },
};

module.exports = UsersObjects;