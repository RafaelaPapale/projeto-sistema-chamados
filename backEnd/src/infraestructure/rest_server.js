const express = require('express');

const app = express();
app.use(express.json());

require('../port/users/usersAPI')(app);

module.exports = app;