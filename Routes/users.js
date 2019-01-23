const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const data = await db('users').select('id', 'username', 'password')
        if(data) {
            res.status(200).json(data)
        } else {

        }
        
    } catch(err){
        res.status(500).json(`{error: 'Invalid route'}`)
    }
});

module.exports = router
