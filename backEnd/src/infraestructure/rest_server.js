const express = require('express');

const app = express();
app.use(express.json());

require('../port/users/usersAPI')(app);
require('../port/customers/customersAPI')(app);
require('../port/chamados/chamadosAPI')(app);

module.exports = app;