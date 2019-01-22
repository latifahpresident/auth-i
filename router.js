const express = require('express');

const users = require('./Routes/users.js');

const router = express.Router();

router.use('/users', users);

module.exports = router