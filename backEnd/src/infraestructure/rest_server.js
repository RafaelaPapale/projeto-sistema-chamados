const express = require('express');

const app = express();
app.use(express.json());

require('../port/users_api')(app);
require('../port/customers_api')(app);
require('../port/chamados_api')(app);

module.exports = app;