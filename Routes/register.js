const express = require('express');
const knex = require('knex');
const bcrypt = require('bcrypt');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

router.post('/', async(req, res) => {
    const creds = req.body;
    const hash = bcrypt.hashSync(creds.password, 14);
    creds.password = hash

    try {
        const data = await db('users').insert(creds)
        if(data) {
            res.status(201).json(data)
        } else {
            res.status(404).json(`{message: 'Please enter username and password'}`)
        }
    } catch(err){
        res.status(500).json(`{error: 'Information not added to database'}`)
    }
});

module.exports = router