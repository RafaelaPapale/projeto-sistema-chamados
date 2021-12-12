const CustomerObjects = {
    //Testes Válidos
    Customer_Valid: {
        nomeFantasia:'CDG Hub',
        endereco: 'Instituto Nacional de Telecomunicações, Santa Rita do Sapucaí - MG',
        cnpj: '23.895.633/0001-89',
    },

    /* Testes Inválidos */
    //Sem um parâmetro obrigatório
    Customer_WithoutMandatoryParam: {
        endereco: 'Instituto Nacional de Telecomunicações, Santa Rita do Sapucaí - MG',
        cnpj: '23.895.633/0001-89',
    },

    //Tipo errado de um parâmetro
    Customer_InvalidTypeParam: {
        nomeFantasia: 'CDG Hub',
        endereco: 'Instituto Nacional de Telecomunicações, Santa Rita do Sapucaí - MG',
        cnpj: 1234567890,
    },

    //Parãmetro sem conteúdo
    Customer_EmptyParam: {
        nomeFantasia: 'CDG Hub',
        endereco: '',
        cnpj: '23.895.633/0001-89'
    },
};

module.exports = CustomerObjects;