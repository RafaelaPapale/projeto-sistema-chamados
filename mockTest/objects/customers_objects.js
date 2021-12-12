const CustomerObjects = {
    //Testes Válidos
    Customer_Valid: {
        nomeFantasia:'CDG Hub',
        endereco: 'Instituto Nacional de Telecomunicações, Santa Rita do Sapucaí - MG',
        cnpj: '23.895.633/0001-89',
    },

    /* Testes Inválidos */
    //Tipo errado de um parâmetro
    Customer_InvalidTypeParam: {
        nomeFantasia: 'CDG Hub',
        endereco: 'Instituto Nacional de Telecomunicações, Santa Rita do Sapucaí - MG',
        cnpj: 1234567890,
    },
};

module.exports = CustomerObjects;