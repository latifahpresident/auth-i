const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const data = await db('users')
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(`{error: 'Invalid route'}`)
    }
});

module.exports = router
