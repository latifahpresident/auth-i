const express = require('express');
const router = require('./router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('server working')
});

server.use('/api', router);

module.exports = server