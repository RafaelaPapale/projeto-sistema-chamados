const Utils = require('../src/application/utils/utils'); //Função de status code no Utils

test('GENERATE UUID', async () => {
    const result = Utils.generateUuid();
    expect(result).not.toBeNull();
});