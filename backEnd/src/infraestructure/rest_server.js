const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('../port/users/usersAPI')(app);
require('../port/customers/customersAPI')(app);
require('../port/chamados/chamadosAPI')(app);

module.exports = app;