const express = require('express');

const users = require('./Routes/users.js');
const register = require('./Routes/register.js');

const router = express.Router();

router.use('/users', users);
router.use('/register', register);

module.exports = router